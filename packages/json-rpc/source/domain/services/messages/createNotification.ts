import { isUndefined } from '@typed/logic'
import { JsonRpcNotification, StructuredJson } from '../../model'

export function createNotification<A extends string>(method: A): JsonRpcNotification<A>
export function createNotification<A extends string, B extends StructuredJson>(
  method: A,
  params: B,
): JsonRpcNotification<A, B>

export function createNotification<A extends string, B extends StructuredJson>(
  method: A,
  params?: B,
): JsonRpcNotification<A, B> {
  const notification = { jsonrpc: '2.0', method }

  if (isUndefined(params)) {
    return notification as JsonRpcNotification<A, B>
  }

  return { ...notification, params } as JsonRpcNotification<A, B>
}
