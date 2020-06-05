import { createChannel } from '@typed/hooks'
import { ServerChannel, ServerState } from '@typed/json-rpc'
import { createSubscription } from '@typed/subscription'

export const TypedServerChannel: ServerChannel<unknown> = createChannel(function* () {
  const state: ServerState = {
    connections: [],
    connectionEvents: createSubscription(),
    notificationHandlers: new Map(),
    requestHandlers: new Map(),
  }

  return state
})
