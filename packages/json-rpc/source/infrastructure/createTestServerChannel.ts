import { createChannel } from '@typed/hooks'
import { Connection, ConnectionEvent, MessageDirection } from '../domain'
import { createSubscription } from '@typed/subscription'
import { ServerState, ServerChannel } from './ServerChannel'
import { Disposable } from '@typed/disposable'

export const createTestServerChannel = (options: Partial<ServerState>): ServerChannel<unknown> =>
  createChannel(function*() {
    const connections: ReadonlyArray<Connection> = []
    const connectionEvents = createSubscription<ConnectionEvent>()

    const state: ServerState = {
      connections,
      connectionEvents,
      notificationHandlers: new Map(),
      requestHandlers: new Map(),
      ...options,
    }

    return state
  })

export const createTestConnection = (options: Partial<Connection> = {}): Connection => {
  return {
    id: 1,
    [MessageDirection.Incoming]: createSubscription(),
    [MessageDirection.Outgoing]: createSubscription(),
    ...Disposable.None,
    ...options,
  }
}
