import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { Arity1, HeadArg } from '@typed/lambda'
import { Subscription } from '@typed/subscription'
import {
  Batchable,
  ErrorResponse,
  FailureResponse,
  Id,
  Message,
  Notification,
  Request,
  Response,
  ResponseErrorData,
  ResponseResult,
} from './json-rpc'

export type JsonRpcRequestHandler<A extends RequestHandlers<any> = RequestHandlers<any>> = {
  readonly stats: RequestStats
  readonly handleRequest: <R extends NotificationsFrom<A> = NotificationsFrom<A>>(
    request: R,
  ) => Promise<ResponseFor<A, R>>
}

export type RequestStats = {
  readonly openRequestCount: number
  readonly requestCount: number
  readonly failureResponseCount: number
}

export type JsonRpcNotificationHandler<
  A extends NotificationHandlers<any> = NotificationHandlers<any>
> = {
  readonly stats: NotificationStats
  readonly handleNotification: <R extends NotificationsFrom<A> = NotificationsFrom<A>>(
    notification: R,
  ) => void
}

export type NotificationStats = {
  readonly notificationCount: number
}

export type JsonRpcMessageSender = {
  readonly stats: MessageSenderStats
  readonly context: MessageContext
  readonly sendNotification: (notification: Notification<any, any>) => void
  readonly sendRequest: (
    request: Request<any, any>,
    timeoutMs?: number,
  ) => Promise<Response<any, any>>
  readonly sendBulkRequest: (
    request: Array<Request<any, any>>,
    timeoutMs?: number,
  ) => Promise<ReadonlyArray<Response<any, any>>>
  readonly sendResponse: (response: Batchable<Response<any, any>>) => void
}

export type MessageSenderStats = {
  // Notifications
  readonly notificationsSent: number

  // Requests
  readonly requestsSent: number
  readonly responsesReceived: number
  readonly failureResponseCount: number
  readonly responseTimeouts: number

  // Responses
  readonly responsesSent: number
  readonly failedResponsesSent: number
}

export type JsonRpcTransport = {
  readonly init: (options: JsonRpcTransportOptions) => Disposable
}

export type JsonRpcTransportOptions = {
  readonly connections: Subscription<ConnectionEvent>
}

export type ConnectionEvent =
  | { readonly type: 'add'; readonly connection: Connection }
  | { readonly type: 'remove'; readonly connection: Connection }

export type Connection = {
  readonly id: Id
  readonly context: MessageContext
}

export interface MessageContext {
  readonly incoming: Subscription<Batchable<Message>>
  readonly outgoing: Subscription<Batchable<Message>>
}

export type RequestHandlers<A extends string> = {
  readonly [K in A]: Arity1<Request<K, any>, Response<any, any> | PromiseLike<Response<any, any>>>
}
export type NotificationHandlers<A extends string> = {
  readonly [K in A]: Arity1<Notification<K, any>>
}

export type NotificationsFrom<A> = A extends Record<string, Arity1>
  ? { [K in keyof A]: HeadArg<A[K]> }[keyof A]
  : never

export type ResponseHandlers = Readonly<Record<string, Arity1<Response<any, any>>>>

export type ResponseFor<
  A extends RequestHandlers<any>,
  R extends Request<string, any>
> = UnwrapPromiseLike<ReturnType<A[R['method']]> | FailureResponse<any>>

export type UnwrapPromiseLike<A> = A extends PromiseLike<infer R> ? R : A

export type ResponseData<A extends Response<any, any>> = Either<
  ErrorResponse<ResponseErrorData<A>>,
  ResponseResult<A>
>
