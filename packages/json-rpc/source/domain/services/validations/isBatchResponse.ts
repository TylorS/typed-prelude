import { all, isArray } from '@typed/logic'
import { BatchResponse } from '../../model'
import { isResponse } from './isResponse'

export function isBatchResponse(x: unknown): x is BatchResponse {
  return isArray(x) && all(isResponse, x)
}
