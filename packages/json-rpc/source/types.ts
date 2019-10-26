import { Subscription } from '@typed/subscription'
import { Message } from './json-rpc'

export interface MessageContext {
  readonly incoming: Subscription<Message>
  readonly outgoing: Subscription<Message>
}
