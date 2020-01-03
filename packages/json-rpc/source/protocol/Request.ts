import { MergeObjects } from '@typed/objects'
import { Id } from './Id'
import { StructuredJson } from './Json'
import { Notification } from './Notification'

export type Request<
  Method extends string = string,
  Params extends StructuredJson = never
> = Readonly<MergeObjects<Notification<Method, Params>, { id: Id }>>

export type RequestBatch = ReadonlyArray<Request<any, any>>
