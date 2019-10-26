import { createSubscription } from '@typed/subscription'
import { MessageContext } from './types'

export class Server {
  public readonly context: MessageContext = {
    incoming: createSubscription(),
    outgoing: createSubscription(),
  }
}
