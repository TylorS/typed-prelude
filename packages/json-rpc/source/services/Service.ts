import { Notification, Request, Response } from '../protocol'

export type IOMessages = ReadonlyArray<
  Notification<any, any> | readonly [Request<any, any>, Response<any, any>]
>

export interface Service<I extends IOMessages = IOMessages, O extends IOMessages = IOMessages> {
  readonly i: I
  readonly o: O
}
