import { Disposable } from '@typed/disposable'
import { Computation, Effects } from '@typed/effects'
import { Subscription } from '@typed/subscription'
import { Id, JsonRpcRequest, JsonRpcResponse, Message } from './json-rpc-v2'

export const enum MessageDirection {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}

export type ConnectionEnv = { readonly connection: Connection }

export interface Connection extends Disposable {
  readonly id: Id
  readonly [MessageDirection.Incoming]: Subscription<Message>
  readonly [MessageDirection.Outgoing]: Subscription<Message>
}

// Publish Messages
export interface SendMessage<E> extends Computation<[Message, MessageDirection], E, Disposable> {}

// Receive Messages
export interface WaitForResponse<E>
  extends Computation<[JsonRpcRequest['id'], MessageDirection], E, JsonRpcResponse> {}

export type SendRequest<E> = <A extends JsonRpcRequest, B extends JsonRpcResponse>(
  request: A,
  direction: MessageDirection,
) => Effects<E, B>
