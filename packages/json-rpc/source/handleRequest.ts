import { unpack } from '@typed/either'
import { Fn } from '@typed/lambda'
import { map, withDefault } from '@typed/maybe'
import { createResponse, createResponseError } from './creators'
import { getNotificationParams } from './getNotificationParams'
import { NotificationParams, ParameterizedRequest, Request, Response } from './json-rpc'
import { ResponseData } from './types'

export function handleRequest<A extends Request<string, any>, B extends Response<any, any>>(
  fn: Fn<
    A extends ParameterizedRequest<string, any> ? [NotificationParams<A>] : [],
    ResponseData<B> | PromiseLike<ResponseData<B>>
  >,
) {
  return async (request: A): Promise<B> => {
    type Args = typeof fn extends (...args: infer R) => any ? R : []
    const args = withDefault(
      [] as Args,
      map(params => [params] as Args, getNotificationParams(request)),
    )

    return unpack(
      error => createResponseError(request, error) as B,
      result => createResponse(request, result) as B,
      await fn(...args),
    )
  }
}
