import { Json } from './Json'
import { Request } from './Request'
import { Failure } from './Response'

export function createFailureResponse<A extends Json>(
  request: Request<any, any>,
  code: number,
  message: string,
  data?: A,
): Failure<A> {
  const error: any = {
    code,
    message,
  }

  if (data) {
    error.data = data
  }

  return {
    jsonrpc: '2.0',
    id: request.id,
    error,
  }
}
