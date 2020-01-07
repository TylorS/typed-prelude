import { Include } from '@typed/lambda'
import { Tuple } from '@typed/tuple'
import { Notification, Request, Response } from '../protocol'

export type ServiceIO = ReadonlyArray<
  Notification<any, any> | readonly [Request<any, any>, Response<any, any>]
>

export type Service<I extends ServiceIO = ServiceIO, O extends ServiceIO = ServiceIO> = Tuple<I, O>

export type ServiceNotifications<A extends ServiceIO> = Exclude<
  ArrayValue<A>,
  readonly [Request<any, any>, Response<any, any>]
>
export type ServiceRequestResponses<A extends ServiceIO> = Exclude<ArrayValue<A>, Notification<any>>

export type ServiceRequests<A extends ServiceIO> = Include<
  ServiceRequestResponses<A>[keyof ServiceRequestResponses<A>],
  Request<any, any>
>

export type ServiceResponses<A extends ServiceIO> = Include<
  ServiceRequestResponses<A>[keyof ServiceRequestResponses<A>],
  Response<any, any>
>

export type FilterMethod<M extends string, N> = Include<N, Notification<M, any>>

type ArrayValue<A> = A extends ReadonlyArray<infer R> ? R : never
