import { FailureResponse, Response, ResponseErrorData } from './json-rpc'

export function isFailure<A extends Response<any, any>>(
  response: A,
): response is A & { readonly error: ResponseErrorData<A> } {
  return !!(response as FailureResponse<any>).error
}
