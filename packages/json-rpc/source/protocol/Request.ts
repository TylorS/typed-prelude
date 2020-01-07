import { Id } from './Id'
import { StructuredJson } from './Json'
import { Notification } from './Notification'

export interface Request<Method extends string = string, Params extends StructuredJson = never>
  extends Notification<Method, Params> {
  readonly id: Id
}

export type RequestBatch = ReadonlyArray<Request<any>>
