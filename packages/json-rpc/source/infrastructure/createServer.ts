import {
  ConnectionEvent,
  JsonRpcNotification,
  JsonRpcRequest,
  JsonRpcResponse,
  Message,
  ConnectionEnv,
  isNotification,
  isRequest,
  isBatchRequest,
  createFailedResponse,
  JsonRpcErrorCode,
  MessageDirection,
  BatchResponse,
} from '../domain'
import {
  HookEffects,
  provideChannel,
  HooksManagerEnv,
  useEffect,
  HookEnv,
  useEffectBy,
  useMemo,
} from '@typed/hooks'
import { append, filter } from '@typed/list'
import { complement, equals } from '@typed/logic'
import { runEffects, get, runWith, combine, TimerEnv, Effect } from '@typed/effects'
import { Disposable, disposeAll } from '@typed/disposable'
import { NotificationHandler, RequestHandler, Server } from '../domain/model/Server'
import { withMutations } from '@typed/map'
import { ServerState, ServerChannel } from './ServerChannel'
import { OrToAnd } from '@typed/lambda'

export function* createServer<E>(
  serverChannel: ServerChannel<E>,
): HookEffects<HooksManagerEnv & TimerEnv & E, Server<E>> {
  const [getServerState, updateServerState] = yield* provideChannel(serverChannel)
  const { connections, connectionEvents } = yield* getServerState()

  const registerNotification = yield* useMemo(
    _ =>
      function* registerNotification<E2, Notification extends JsonRpcNotification>(
        method: Notification['method'],
        handler: NotificationHandler<E2, Notification>,
      ): HookEffects<E & E2, Disposable> {
        // Store this environment just in case it's run like runWith(registerNotification(...), ...)
        const env = yield* get()

        yield* updateServerState(state => ({
          ...state,
          notificationHandlers: withMutations(
            handlers => handlers.set(method, [handler, env]),
            state.notificationHandlers,
          ),
        }))

        const dispose = () =>
          runEffects(
            updateServerState(state => ({
              ...state,
              notificationHandlers: withMutations(
                handlers => handlers.delete(method),
                state.notificationHandlers,
              ),
            })),
            env as OrToAnd<HookEnv & E>,
          )

        return { dispose }
      },
    [updateServerState],
  )

  const registerRequest = yield* useMemo(
    _ =>
      function* registerRequest<E2, Req extends JsonRpcRequest, Res extends JsonRpcResponse>(
        method: Req['method'],
        handler: RequestHandler<E2, Req, Res>,
      ): HookEffects<E & E2, Disposable> {
        // Store this environment just in case it's run like runWith(registerRequest(...), ...)
        const env = yield* get()

        yield* updateServerState(state => ({
          ...state,
          requestHandlers: withMutations(
            handlers => handlers.set(method, [handler, env]),
            state.requestHandlers,
          ),
        }))

        const dispose = () =>
          runEffects(
            updateServerState(state => ({
              ...state,
              requestHandlers: withMutations(
                handlers => handlers.delete(method),
                state.requestHandlers,
              ),
            })),
            env as OrToAnd<HookEnv & E>,
          )
        return { dispose }
      },
    [updateServerState],
  )

  const handleIncomingMessage = yield* useMemo<
    unknown,
    [],
    (message: Message) => HookEffects<ConnectionEnv & HooksManagerEnv & E, void>
  >(
    () =>
      function* handleIncomingMessage(
        message: Message,
      ): HookEffects<ConnectionEnv & HooksManagerEnv & E, void> {
        const { getEnvironmentByKey, connection } = yield* get<ConnectionEnv & HooksManagerEnv>()
        const hookEnvironment = yield* getEnvironmentByKey(connection)
        const { notificationHandlers, requestHandlers } = yield* getServerState()
        const outgoing = connection[MessageDirection.Outgoing]

        if (isRequest(message) && !requestHandlers.has(message.method)) {
          outgoing.publish(
            createFailedResponse<JsonRpcErrorCode.MethodNotFound, never>(message.id, {
              code: JsonRpcErrorCode.MethodNotFound,
              message: 'Method Not Found',
            }),
          )

          return
        }

        if (isRequest(message)) {
          const [handler, env] = requestHandlers.get(message.method)!

          const response = yield* runWith(handler(message), { ...env, hookEnvironment })

          outgoing.publish(response)

          return
        }

        if (isNotification(message) && notificationHandlers.has(message.method)) {
          const [handler, env] = notificationHandlers.get(message.method)!

          return yield* runWith(handler(message), { ...env, hookEnvironment })
        }

        if (isBatchRequest(message)) {
          function* runRequest(req: JsonRpcRequest) {
            if (!requestHandlers.has(req.method)) {
              return createFailedResponse<JsonRpcErrorCode.MethodNotFound, never>(req.id, {
                code: JsonRpcErrorCode.MethodNotFound,
                message: 'Method Not Found',
              })
            }

            const [handler, env] = requestHandlers.get(req.method)!

            return yield* runWith(handler(message), { ...env, hookEnvironment })
          }

          const responses = yield* combine(...message.map(runRequest))

          outgoing.publish(responses as BatchResponse)

          return
        }
      },
    [],
  )

  const env = yield* get()

  // Listen to new connections
  const connectionEventsDisposable = yield* useEffect(
    s => s.subscribe(event => runEffects(updateServerState(applyConnectionEvent(event)), env)),
    [connectionEvents],
  )

  // Listen to all incoming messages
  const incomingMessagesDisposable = yield* useEffectBy(
    connection =>
      Effect.of(
        connection[MessageDirection.Incoming].subscribe(message =>
          runEffects(handleIncomingMessage(message), {
            ...env,
            connection,
          }),
        ),
      ),
    connections,
  )
  const disposable = yield* useMemo((...disposables) => disposeAll(disposables), [
    connectionEventsDisposable,
    incomingMessagesDisposable,
  ])

  return {
    ...disposable,
    registerNotification,
    registerRequest,
  } as const
}

const applyConnectionEvent = ([type, connection]: ConnectionEvent) => (
  state: ServerState,
): ServerState =>
  type === 'add'
    ? { ...state, connections: append(connection, state.connections) }
    : { ...state, connections: filter(complement(equals(connection)), state.connections) }
