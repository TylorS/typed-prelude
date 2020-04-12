import { Disposable } from '@typed/disposable'
import { Computation } from '@typed/effects'
import { Subscription } from '@typed/subscription'
import { Id, JsonRpcRequest, JsonRpcResponse, Message } from './json-rpc-v2'

export const enum MessageDirection {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}

export interface Connection extends Disposable {
  readonly id: Id
  readonly [MessageDirection.Incoming]: Subscription<Message>
  readonly [MessageDirection.Outgoing]: Subscription<Message>
}

export type ConnectionEnv = { readonly connection: Connection }

// Publish Messages
export interface SendMessage<E> extends Computation<[Message, MessageDirection], E, Disposable> {}

// Receive Messages
export interface WaitForResponse<E>
  extends Computation<[JsonRpcRequest['id'], MessageDirection], E, JsonRpcResponse> {}
