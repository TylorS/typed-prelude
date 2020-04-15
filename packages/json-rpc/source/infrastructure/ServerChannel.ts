import { Channel } from '@typed/hooks'
import { Subscription } from '@typed/subscription'
import { Tuple } from '@typed/tuple'
import { Connection, ConnectionEvent } from '../domain'
import { NotificationHandler, RequestHandler } from '../domain/model/Server'

export type ServerChannel<E> = Channel<E, ServerState>

export type ServerState = {
  readonly connections: ReadonlyArray<Connection>
  readonly connectionEvents: Subscription<ConnectionEvent>
  readonly notificationHandlers: HandlerMap<NotificationHandler<any, any>>
  readonly requestHandlers: HandlerMap<RequestHandler<any, any, any>>
}

export type HandlerMap<A> = ReadonlyMap<string, Tuple<A, any>>
