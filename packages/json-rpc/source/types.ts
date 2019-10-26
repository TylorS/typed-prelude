import { Either } from '@typed/either'
import { Arity1, HeadArg } from '@typed/lambda'
import { Subscription } from '@typed/subscription'
import {
  ErrorResponse,
  FailureResponse,
  Message,
  Notification,
  Request,
  Response,
  ResponseErrorData,
  ResponseResult,
} from './json-rpc'

export type JsonRpcHandler<A extends RequestHandlers<any>, B extends NotificationHandlers> = {
  readonly stats: JsonRpcStats
  readonly sendRequest: <R extends NotificationsFrom<A> = NotificationsFrom<A>>(
    request: R,
  ) => Promise<ResponseFor<A, R>>
  readonly sendNotification: <R extends NotificationsFrom<B> = NotificationsFrom<B>>(
    notification: R,
  ) => void
}

export type JsonRpcStats = {
  readonly openRequestCount: number
  readonly requestCount: number
  readonly failureResponseCount: number
  readonly notificationCount: number
}

export interface MessageContext {
  readonly incoming: Subscription<Message>
  readonly outgoing: Subscription<Message>
}

export type RequestHandlers<A extends string> = {
  readonly [K in A]: Arity1<Request<K, any>, Response<any, any> | PromiseLike<Response<any, any>>>
}
export type NotificationHandlers = Readonly<Record<string, Arity1<Notification<any, any>>>>

export type NotificationsFrom<A> = A extends Record<string, Arity1>
  ? { [K in keyof A]: HeadArg<A[K]> }[keyof A]
  : never

export type ResponseFor<
  A extends RequestHandlers<any>,
  R extends Request<string, any>
> = UnwrapPromiseLike<ReturnType<A[R['method']]> | FailureResponse<any>>

export type UnwrapPromiseLike<A> = A extends PromiseLike<infer R> ? R : A

export type ResponseData<A extends Response<any, any>> = Either<
  ErrorResponse<ResponseErrorData<A>>,
  ResponseResult<A>
>