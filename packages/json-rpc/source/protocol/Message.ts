import { Notification } from './Notification'
import { Request, RequestBatch } from './Request'
import { Response, ResponseBatch } from './Response'

export type Message =
  | Notification<any, any>
  | Request<any, any>
  | RequestBatch
  | Response<any, any>
  | ResponseBatch
