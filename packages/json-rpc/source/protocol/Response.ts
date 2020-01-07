import { DropNever } from './DropNever'
import { Id } from './Id'
import { Json } from './Json'

export type ResponseBatch = ReadonlyArray<Response<any>>

export type Response<Result extends Json = Json, ErrorData extends Json = never> =
  | Success<Result>
  | Failure<ErrorData>

export type Success<Result extends Json = Json> = {
  readonly jsonrpc: '2.0'
  readonly id: Id
  readonly result: Result
}

export type Failure<Data extends Json = never> = {
  readonly jsonrpc: '2.0'
  readonly id: Id | null
  readonly error: ResponseError<Data>
}

export type ResponseError<Data extends Json = never> = DropNever<{
  readonly code: number // integer
  readonly message: string
  readonly data: Data
}>
