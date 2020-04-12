import { all, isArray } from '@typed/logic'
import { BatchRequest } from '../../model'
import { isRequest } from './isRequest'

export function isBatchRequest(x: unknown): x is BatchRequest {
  return isArray(x) && all(isRequest, x)
}
