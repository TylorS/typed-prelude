import { Effect, Effects } from '@typed/effects'
import { Resume } from '@typed/env'
import { UuidEnv, uuid } from '@typed/uuid'
import { WebSocketFailure } from './WebSocketFailure'
import { createConnectionFromWebSocket } from './createConnectionFromWebSocket'
import { noOp } from '@typed/lambda'
import { Connection } from '../../domain/model'

export interface ClientWebsocketEnv {
  readonly createWebsocket: () => Resume<WebSocket>
}

export type CreateWebSocketEnv = ClientWebsocketEnv & WebSocketFailure & UuidEnv

export const createWebSocketConnection = function*(): Effects<CreateWebSocketEnv, Connection> {
  const webSocket = yield* Effect.fromEnv((env: ClientWebsocketEnv) => env.createWebsocket())
  const id = yield* uuid()

  return yield* createConnectionFromWebSocket(webSocket, id, noOp)
}
