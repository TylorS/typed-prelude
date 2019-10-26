import { createUuid } from '@typed/uuid'
import {
  ErrorResponse,
  JSON_RPC_VERSION,
  Notification,
  NotificationMethod,
  ParameterizedNotification,
  Request,
  Response,
  ResponseErrorData,
  StructuredType,
} from './json-rpc'

export type NotificationArgs<
  A extends Notification<string, any>
> = A extends ParameterizedNotification<infer R1, infer R2> ? [R1, R2] : [NotificationMethod<A>]

export function createNotification<A extends string, B extends StructuredType>(
  method: A,
  params: B,
): Notification<A, B>

export function createNotification<A extends string>(method: A): Notification<A, undefined>

export function createNotification<A extends Notification<string, any>>(
  ...args: NotificationArgs<A>
): A

export function createNotification<A extends Notification<string, any>>(
  ...args: NotificationArgs<A>
): A {
  const [method, params] = args

  return {
    jsonrpc: JSON_RPC_VERSION,
    method,
    params,
  } as any // TS cannot properly infer this type as correct
}

export function createRequest<A extends string, B extends StructuredType>(
  method: A,
  params: B,
): Request<A, B>

export function createRequest<A extends string>(method: A): Request<A, undefined>

export function createRequest<A extends Request<string, any>>(...args: NotificationArgs<A>): A

export function createRequest<A extends Request<string, any>>(...args: NotificationArgs<A>): A {
  return {
    ...createNotification<A>(...args),
    id: createUuid(),
  }
}

export function createResponse<A extends Request<string, any>, Result>(
  request: A,
  result: Result,
): Response<Result, undefined> {
  return {
    jsonrpc: request.jsonrpc,
    id: request.id,
    result,
  }
}

export function createResponseError<A extends Request<string, any>, B extends ErrorResponse>(
  request: A,
  error: B,
): Response<undefined, ResponseErrorData<B>> {
  return {
    jsonrpc: request.jsonrpc,
    id: request.id,
    error,
  } as any // TS cannot properly infer this type as correct
}
