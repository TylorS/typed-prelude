import { Response, ResponseResult } from './json-rpc'

export function isSuccessful<A extends Response<any, any>>(
  response: A,
): response is A & { readonly result: ResponseResult<A> } {
  return response.hasOwnProperty('result')
}
