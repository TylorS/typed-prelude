import { Tuple } from '@typed/tuple'
import { Notification, Request, Response } from '../protocol'

export type IOMessages = ReadonlyArray<
  Notification<any, any> | readonly [Request<any, any>, Response<any, any>]
>

export type Service<I extends IOMessages, O extends IOMessages> = Tuple<I, O>
