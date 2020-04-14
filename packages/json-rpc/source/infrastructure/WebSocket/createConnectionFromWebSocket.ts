import { Disposable, onDisposed } from '@typed/disposable'
import { Effect, orFail } from '@typed/effects'
import { Future } from '@typed/future'
import { ArgsOf } from '@typed/lambda'
import { createSubscription } from '@typed/subscription'
import { createFailedResponse, isMessage } from '../../domain'
import { Connection, JsonRpcErrorCode, Message, MessageDirection, Id } from '../../domain/model'
import { WebSocketFailure } from './WebSocketFailure'

const CLOSE_ARGS: ArgsOf<WebSocket['close']> = [void 0, 'Resource no longer required']

export function* createConnectionFromWebSocket(webSocket: WebSocket, id: Id, onClose: () => void) {
  const incoming = createSubscription<Message>()
  const outgoing = createSubscription<Message>()

  webSocket.onmessage = ev => {
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
    onClose()
  }

  const connection: Connection = {
    id,
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
