// JSON-RPC 2.0 protocol defined here
// https://www.jsonrpc.org/specification

export type Id = string | number // identifier, unique

export type Message = Notification<any, any> | Request<any, any> | Response<any, any>

export type JSON_RPC_VERSION = '2.0'
export const JSON_RPC_VERSION = '2.0'

export type Primitive = undefined | null | boolean | string | number
export type StructuredType = ReadonlyArray<unknown> | Record<string, unknown>

// Messages can be sent in a batch
// Responses can optionally be send in a batch
export type Batchable<A> = A | readonly A[]

export type Notification<
  Method extends string = string,
  Params extends StructuredType | undefined = undefined
> = Params extends undefined
  ? {
      readonly jsonrpc: JSON_RPC_VERSION
      readonly method: Method
    }
  : {
      readonly jsonrpc: JSON_RPC_VERSION
      readonly method: Method
      readonly params: Params
    }

export type Request<
  Method extends string = string,
  Params extends StructuredType | undefined = undefined
> = Params extends undefined
  ? {
      readonly jsonrpc: JSON_RPC_VERSION
      readonly method: Method
      readonly id: Id
    }
  : {
      readonly jsonrpc: JSON_RPC_VERSION
      readonly method: Method
      readonly params: Params
      readonly id: Id
    }

export type ErrorData = StructuredType | Primitive

export type Response<Result = any, Data extends ErrorData = undefined> =
  | SuccessfulResponse<Result>
  | FailureResponse<Data>

export type SuccessfulResponse<Result = any> = {
  readonly jsonrpc: JSON_RPC_VERSION
  readonly id: Id // used to correspond with a request
  readonly result: Result
}

export type FailureResponse<Data extends ErrorData = undefined> = {
  readonly jsonrpc: JSON_RPC_VERSION
  readonly id: Id // used to correspond with a request
  readonly error: ResponseError<Data>
}

export type ResponseError<Data extends ErrorData = ErrorData> = Data extends undefined
  ? {
      readonly code: number // integer
      readonly message: string
    }
  : {
      readonly code: number // integer
      readonly message: string
      readonly data: Data
    }

export type NotificationMethod<A> = A extends Notification<infer R> ? R : never
export type NotificationParams<A> = A extends Notification<any, infer R> ? R : never

export type ResponseResult<A> = A extends SuccessfulResponse<infer R> ? R : never

export type ResponseErrorData<A> = A extends ResponseError<infer R>
  ? A extends Response<any, infer R>
    ? R
    : R
  : never
