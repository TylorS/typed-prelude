import { Disposable } from '@typed/disposable'
import { createChannel } from '@typed/hooks'
import { createSubscription, Subscription } from '@typed/subscription'
import { Connection, ConnectionEvent, MessageDirection } from '../domain'
import { ServerChannel, ServerState } from './ServerChannel'

export const createTestServerChannel = (options: Partial<ServerState>): ServerChannel<unknown> =>
  createChannel(function* () {
    const connections: ReadonlyArray<Connection> = []
    const connectionEvents = createConnectionEventSubscription()

    const state: ServerState = {
      connections,
      connectionEvents,
      notificationHandlers: new Map(),
      requestHandlers: new Map(),
      ...options,
    }

    return state
  })

export const createConnectionEventSubscription = (): Subscription<ConnectionEvent> =>
  createSubscription<ConnectionEvent>()

export const createTestConnection = (options: Partial<Connection> = {}): Connection => {
  return {
    id: 1,
    [MessageDirection.Incoming]: createSubscription(),
    [MessageDirection.Outgoing]: createSubscription(),
    ...Disposable.None,
    ...options,
  }
}
