import { Request } from './Request'
import { Success } from './Response'

export function createSuccessResponse<A extends Success['result']>(
  request: Request<any, any>,
  result: A,
): Success<A> {
  return {
    jsonrpc: '2.0',
    id: request.id,
    result,
  }
}
