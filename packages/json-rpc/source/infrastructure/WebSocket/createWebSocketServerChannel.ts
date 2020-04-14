import { createChannel, HookEnv, useEffectOnce } from '@typed/hooks'
import { ServerChannel, ServerState } from '../ServerChannel'
import { Effect, orFail, TimerEnv } from '@typed/effects'
import { Future } from '@typed/future'
import { WebSocketFailure } from './WebSocketFailure'
import { Connection, ConnectionEvent } from '../../domain'
import { createSubscription } from '@typed/subscription'

export type WebSocketServerEnv = HookEnv & TimerEnv & WebSocketFailure

export function createWebSocketServerChannel(
  options?: import('ws').ServerOptions,
): ServerChannel<WebSocketServerEnv> {
  return createChannel(function*() {
    const ws = yield* orFail(
      WebSocketFailure,
      Effect.fromEnv(Future.fromPromise(() => import('ws'))),
    )

    const connections: ReadonlyArray<Connection> = []
    const connectionEvents = createSubscription<ConnectionEvent>()

    const state: ServerState = {
      connections,
      connectionEvents,
      notificationHandlers: new Map(),
      requestHandlers: new Map(),
    }

    yield* useEffectOnce(() => {
      const server = new ws.Server(options)

      const dispose = () => server.close()

      return { dispose }
    })

    return state
  })
}
