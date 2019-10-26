import { createSubscription } from '@typed/subscription'
import { MessageContext } from './types'

export function createMessageContext(): MessageContext {
  return {
    incoming: createSubscription(),
    outgoing: createSubscription(),
  }
}
