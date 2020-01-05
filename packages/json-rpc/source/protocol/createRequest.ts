import { createUuid } from '@typed/uuid'
import { createNotification } from './createNotification'
import { StructuredJson } from './Json'
import { Request } from './Request'

export function createRequest<Method extends string, Params extends StructuredJson = never>(
  method: Method,
  params?: Params,
): Request<Method, Params> {
  return { ...createNotification(method, params as any), id: createUuid() } as Request<
    Method,
    Params
  >
}
