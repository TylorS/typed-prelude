import { Disposable, onDisposed } from '@typed/disposable'
import { Effect, FailEnv, orFail } from '@typed/effects'
import { Resume } from '@typed/env'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda'
import { createSubscription } from '@typed/subscription'
import { uuid, UuidEnv } from '@typed/uuid'
import { createFailedResponse, isMessage } from '../domain'
import {
  Connection,
  CreateConnection,
  JsonRpcErrorCode,
  Message,
  MessageDirection,
} from '../domain/model'

export interface WebsocketEnv {
  readonly createWebsocket: () => Resume<WebSocket>
}

export const WebSocketFailure = Symbol('WebSocketFailure')
export type WebSocketFailure = FailEnv<typeof WebSocketFailure, Error>

const CLOSE_ARGS: ArgsOf<WebSocket['close']> = [void 0, 'Resource no longer required']

export const createWebsocketConnection: CreateConnection<
  WebsocketEnv & WebSocketFailure & UuidEnv
> = function* () {
  const incoming = createSubscription<Message>()
  const outgoing = createSubscription<Message>()
  const webSocket = yield* Effect.fromEnv((env) => env.createWebsocket())

  webSocket.onmessage = (ev) => {
    if (isMessage(ev.data)) {
      return incoming.publish(ev.data)
    }

    outgoing.publish(
      createFailedResponse<JsonRpcErrorCode.ParseError, never>(null, {
        code: JsonRpcErrorCode.ParseError,
        message: 'Unable to parse message',
      }),
    )
  }

  if (webSocket.readyState === WebSocket.CONNECTING) {
    yield* orFail(WebSocketFailure, waitUntilOpen(webSocket))
  }

  webSocket.onclose = () => {
    incoming.clearSubscribers()
    outgoing.clearSubscribers()
  }

  const connection: Connection = {
    id: yield* uuid(),
    [MessageDirection.Incoming]: incoming,
    [MessageDirection.Outgoing]: outgoing,
    dispose: () => webSocket.close(...CLOSE_ARGS),
  }

  return connection
}

const waitUntilOpen = (webSocket: WebSocket) =>
  Effect.fromEnv(
    Future.create<unknown, Error, void>((reject, resolve) => {
      const disposable = Disposable.lazy()

      webSocket.onclose = () => {
        disposable.addDisposable(reject(new Error(`Websocket Closed`)))
      }

      webSocket.onerror = () => {
        disposable.addDisposable(reject(new Error(`Websocket Closed:: Unknown Error`)))
      }

      webSocket.onopen = () => disposable.addDisposable(resolve())

      return onDisposed(() => webSocket.close(...CLOSE_ARGS), disposable)
    }),
  )
