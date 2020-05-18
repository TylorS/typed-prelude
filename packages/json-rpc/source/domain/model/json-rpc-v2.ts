import { Json } from '@typed/common'

export type Id = string | number
export type StructuredJson = Readonly<Partial<Record<string, any>>> | readonly any[]

export type Message = JsonRpcRequest | JsonRpcResponse | JsonRpcNotification | Batch
export type BatchRequest = JsonRpcRequest[]
export type BatchResponse = JsonRpcResponse[]
export type Batch = BatchRequest | BatchResponse

export type JsonRpcNotification<
  Method extends string = string,
  Params extends StructuredJson = StructuredJson
> = IsNever<Params> extends true
  ? {
      readonly jsonrpc: '2.0'
      readonly method: Method
    }
  : {
      readonly jsonrpc: '2.0'
      readonly method: Method
      readonly params: Params
    }

export type JsonRpcRequest<
  Method extends string = string,
  Params extends StructuredJson = StructuredJson
> = IsNever<Params> extends true
  ? {
      readonly jsonrpc: '2.0'
      readonly id: Id
      readonly method: Method
    }
  : {
      readonly jsonrpc: '2.0'
      readonly id: Id
      readonly method: Method
      readonly params: Params
    }

export type JsonRpcResponse<
  Result extends StructuredJson = StructuredJson,
  Code extends number = number,
  ErrorData extends Json = Json
> = JsonRpcSuccessfulResponse<Result> | JsonRpcFailedResponse<Code, ErrorData>

export type JsonRpcSuccessfulResponse<Result extends StructuredJson = StructuredJson> = {
  readonly jsonrpc: '2.0'
  readonly id: Id
  readonly result: Result
}

export type JsonRpcFailedResponse<Code extends number = number, ErrorData extends Json = never> = {
  readonly jsonrpc: '2.0'
  readonly id: Id
  readonly error: JsonRpcError<Code, ErrorData>
}

export type JsonRpcError<Code extends number = number, ErrorData extends Json = never> = IsNever<
  ErrorData
> extends true
  ? {
      readonly code: Code
      readonly message: string
    }
  : {
      readonly code: Code
      readonly message: string
      readonly data: ErrorData
    }

export type IsNever<A> = [A] extends [never] ? true : false

export const enum JsonRpcErrorCode {
  ParseError = -32700,
  InvalidRequest = -32600,
  MethodNotFound = -32601,
  InvalidParams = -32602,
  InternalError = -32603,
  // -32000 to -32099 reserved for server errors
}
