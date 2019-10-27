import { Either } from '@typed/either'
import { isSuccessful } from './isSuccessful'
import { FailureResponse, Response } from './json-rpc'
import { ResponseData } from './types'

export function getResponseData<A extends Response<any, any>>(response: A): ResponseData<A> {
  const data = isSuccessful(response)
    ? Either.of(response.result)
    : Either.left((response as FailureResponse).error)

  return data as ResponseData<A>
}
