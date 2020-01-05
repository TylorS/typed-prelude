import { isNull, isObject, isString, isUndefined } from '@typed/logic'
import {
  Json,
  Message,
  Notification,
  NotificationBatch,
  RequestBatch,
  Response,
  ResponseBatch,
  StructuredJson,
} from '../protocol'
import { isId } from './isId'

type Unbatched = Exclude<Message, ResponseBatch | RequestBatch | NotificationBatch>

export function isBatch(
  message: Message,
): message is ResponseBatch | RequestBatch | NotificationBatch {
  return Array.isArray(message)
}

export const isJsonRpcV2 = (message: Message): message is Unbatched =>
  !isBatch(message) && (message as Notification<any, any> | Response<any, any>).jsonrpc === '2.0'

export const hasId = (message: Unbatched): message is Exclude<Unbatched, Notification<any, any>> =>
  isId((message as Response<any, any>).id)

export const hasValidParams = (
  message: Unbatched,
): message is Exclude<Unbatched, Response<any, any>> =>
  isUndefined((message as Notification<any, {}>).params) ||
  isStructuredJson((message as Notification<any, {}>).params)

export const hasValidMethod = (
  message: Unbatched,
): message is Exclude<Unbatched, Response<any, any>> =>
  isString((message as Notification<any, any>).method)

export const isJson = (x: any): x is Json => isJsonPrimitive(x) || isStructuredJson(x)

export const isJsonPrimitive = (x: any) => {
  switch (typeof x) {
    case 'string':
    case 'number':
    case 'boolean':
      return true
    case 'object':
      return isNull(x) || isStructuredJson(x)
    default:
      return false
  }
}

export const isStructuredJson = (x: any): x is StructuredJson => {
  if (Array.isArray(x)) {
    return x.every(isJson)
  }

  if (isObject(x)) {
    return Object.values(x).every(isJson)
  }

  return false
}
