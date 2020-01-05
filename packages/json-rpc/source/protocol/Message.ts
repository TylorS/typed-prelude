import { Notification } from './Notification'
import { Request } from './Request'
import { Response, ResponseBatch } from './Response'

export type Message =
  | Notification<any, any>
  | Request<any, any>
  | ReadonlyArray<Notification<any, any> | Request<any, any>>
  | Response<any, any>
  | ResponseBatch
