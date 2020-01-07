import { StructuredJson } from './Json'

export interface Notification<
  Method extends string = string,
  Params extends StructuredJson = never
> {
  readonly jsonrpc: '2.0'
  readonly method: Method
  readonly params: Params
}

export type NotificationMethod<A> = A extends Notification<infer R, any> ? R : never
export type NotificationParams<A> = A extends Notification<any, infer R> ? R : never

export type NotificationBatch = ReadonlyArray<Notification<any>>
