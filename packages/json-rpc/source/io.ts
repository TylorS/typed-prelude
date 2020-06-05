import { Json } from '@typed/common'
import * as t from '@typed/io'
import { isJsonObject } from '@typed/logic'
import {
  JsonRpcError,
  JsonRpcFailedResponse,
  JsonRpcNotification,
  JsonRpcRequest,
  JsonRpcSuccessfulResponse,
  StructuredJson,
} from './domain'

const jsonrpc = t.literal('2.0')
const id = t.union([t.String, t.Number])
const structuredJson: t.Mixed = t.union([t.Array, t.Record])

export const UnknownJsonRpcNotification = t.union([
  jsonRpcNotification(t.String, structuredJson),
  jsonRpcNotification(t.String),
])

export function jsonRpcNotification<A extends t.Mixed, B extends t.Mixed>(
  method: A,
  params?: B,
): t.Type<JsonRpcNotification<t.TypeOf<A>, t.TypeOf<B>>> {
  return t.record(
    params
      ? {
          jsonrpc,
          method,
          params,
        }
      : {
          jsonrpc,
          method,
        },
    `JsonRpcNotification<${method}>`,
  ) as any
}

export const UnknownJsonRpcRequest = t.union([
  jsonRpcRequest(t.String, structuredJson),
  jsonRpcRequest(t.String),
])

export function jsonRpcRequest<A extends t.Mixed>(
  method: A,
): t.Type<JsonRpcRequest<t.TypeOf<A>, never>>
export function jsonRpcRequest<A extends t.Mixed, B extends t.Mixed>(
  method: A,
  params: B,
): t.Type<JsonRpcRequest<t.TypeOf<A>, t.TypeOf<B>>>

export function jsonRpcRequest<A extends t.Type<string, any>, B extends t.Mixed>(
  method: A,
  params?: B,
): t.Type<JsonRpcRequest<t.TypeOf<A>, never>> | t.Type<JsonRpcRequest<t.TypeOf<A>, t.TypeOf<B>>> {
  return t.record(
    params
      ? {
          jsonrpc,
          id,
          method,
          params,
        }
      : {
          jsonrpc,
          id,
          method,
        },
    `JsonRpcRequest<${method}>`,
  ) as any
}

export const UnknownJsonRpcResponse = t.union([
  t.lazy(() => UnknownJsonRpcSuccessfulResponse),
  t.lazy(() => UnknownJsonRpcFailedResponse),
])

export const UnknownJsonRpcSuccessfulResponse = t.union([
  jsonRpcSuccessResponse(),
  jsonRpcSuccessResponse(structuredJson),
])

export function jsonRpcSuccessResponse(): t.Type<JsonRpcSuccessfulResponse<never>>
export function jsonRpcSuccessResponse<R extends StructuredJson>(
  result?: t.Type<R>,
): t.Type<JsonRpcSuccessfulResponse<R>>

export function jsonRpcSuccessResponse<R extends StructuredJson>(
  result?: t.Type<R>,
): t.Type<JsonRpcSuccessfulResponse<never>> | t.Type<JsonRpcSuccessfulResponse<R>> {
  return t.record(
    result
      ? {
          jsonrpc,
          id,
          result,
        }
      : {
          jsonrpc,
          id,
        },
  ) as any
}

const _JsonRpcErrorNever = t.record<t.PropsOf<JsonRpcError>>({
  code: t.Number,
  message: t.String,
})

const _Json: t.Type<Json> = t.recursive((_type) =>
  t.union([
    t.String,
    t.Number,
    t.Boolean,
    t.Null,
    t.array(_type),
    t.refinement(t.Record, isJsonObject),
  ]),
)

const _JsonRpcErrorJson = t.record<t.PropsOf<JsonRpcError<number, Json>>>({
  code: t.Number,
  message: t.String,
  data: _Json,
})

export const UnknownJsonRpcError = t.union([_JsonRpcErrorNever, _JsonRpcErrorJson])
export const UnknownJsonRpcFailedResponse = t.union([
  jsonRpcFailedResponse(_JsonRpcErrorNever),
  jsonRpcFailedResponse(_JsonRpcErrorJson),
])

export function jsonRpcFailedResponse<Code extends number, ErrorData extends Json = never>(
  error: t.Type<JsonRpcError<Code, ErrorData>>,
): t.Type<JsonRpcFailedResponse<Code, ErrorData>> {
  return t.record(
    error
      ? {
          jsonrpc,
          id,
          error,
        }
      : {
          jsonrpc,
          id,
        },
  ) as any
}
