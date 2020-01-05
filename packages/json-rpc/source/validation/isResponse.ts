import { isNumber, isString, isUndefined } from '@typed/logic'
import { Failure, Message, Response, ResponseError, Success } from '../protocol'
import { hasId, isJson, isJsonRpcV2 } from './common'

export function isResponse(message: Message): message is Response<any, any> {
  return isSuccess(message) || isFailure(message)
}

export function isSuccess(message: Message): message is Success<any> {
  return isJsonRpcV2(message) && hasId(message) && isJson((message as Success<any>).result)
}

export function isFailure(message: Message): message is Failure<any> {
  return isJsonRpcV2(message) && hasId(message) && isResponseError((message as Failure<any>).error)
}

export function isResponseError(x: any): x is ResponseError<any> {
  return isNumber(x.code) && isString(x.message) && (isUndefined(x.data) || isJson(x.data))
}
