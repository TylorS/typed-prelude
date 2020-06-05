import { Disposable } from '@typed/disposable'
import { HookEffects } from '@typed/hooks'
import { Tuple } from '@typed/tuple'
import { Connection, ConnectionEnv } from './Connection'
import { JsonRpcNotification, JsonRpcRequest, JsonRpcResponse } from './json-rpc-v2'

export interface Server<E> extends Disposable {
  readonly registerNotification: <E2, A extends JsonRpcNotification>(
    method: A['method'],
    handler: NotificationHandler<E2, A>,
  ) => HookEffects<E & E2, Disposable>

  readonly registerRequest: <E2, A extends JsonRpcRequest, B extends JsonRpcResponse>(
    method: A['method'],
    handler: RequestHandler<E2, A, B>,
  ) => HookEffects<E & E2, Disposable>
}

export type NotificationHandler<E, A extends JsonRpcNotification> = (
  notification: A,
) => HookEffects<ConnectionEnv & E, void>

export type RequestHandler<E, A extends JsonRpcRequest, B extends JsonRpcResponse> = (
  request: A,
) => HookEffects<ConnectionEnv & E, B>

export type ConnectionEvent = Tuple<'add', Connection> | Tuple<'remove', Connection>
