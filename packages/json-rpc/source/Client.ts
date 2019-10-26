import { createSubscription } from '@typed/subscription'
import { MessageContext } from './types'

export class Client {
  public readonly context: MessageContext = {
    incoming: createSubscription(),
    outgoing: createSubscription(),
  }
}
