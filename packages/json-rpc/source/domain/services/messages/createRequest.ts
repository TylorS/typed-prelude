import { isUndefined } from '@typed/logic'
import { Id, JsonRpcRequest, StructuredJson } from '../../model'

export function createRequest<A extends string>(id: Id, method: A): JsonRpcRequest<A>
export function createRequest<A extends string, B extends StructuredJson>(
  id: Id,
  method: A,
  params: B,
): JsonRpcRequest<A, B>

export function createRequest<A extends string, B extends StructuredJson>(
  id: Id,
  method: A,
  params?: B,
): JsonRpcRequest<A, B> {
  const request: JsonRpcRequest<A, never> = { jsonrpc: '2.0', id, method }

  if (isUndefined(params)) {
    return request as JsonRpcRequest<A, B>
  }

  return { ...request, params } as JsonRpcRequest<A, B>
}
