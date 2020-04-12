import { isNumber, isString, or } from '@typed/logic'
import { JsonRpcRequest } from '../../model'
import { isNotification } from './isNotification'

const isId = or(isString, isNumber)

export function isRequest(x: unknown): x is JsonRpcRequest {
  return isNotification(x) && isId((x as JsonRpcRequest).id)
}
