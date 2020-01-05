import { DropNever } from './DropNever'
import { StructuredJson } from './Json'

export type Notification<
  Method extends string = string,
  Params extends StructuredJson = never
> = DropNever<{
  readonly jsonrpc: '2.0'
  readonly method: Method
  readonly params: Params
}>

export type NotificationBatch = ReadonlyArray<Notification<any, any>>
