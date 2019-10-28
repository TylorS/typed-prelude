import { isNumber, isString, or } from '@typed/logic'
import { Batchable, Id, Message, Notification, Request, Response } from './json-rpc'

const isStringOrNumber = or(isNumber, isString)

export function isRequest(message: Message): message is Request<any, any> {
  return !!message && message.hasOwnProperty('id')
}

export function isResponseFor<A extends Response<any, any>>(
  id: Id,
  message: Message,
): message is A {
  return (
    (message as A).id === id &&
    (message.hasOwnProperty('result') || message.hasOwnProperty('error'))
  )
}

export function isResponse(message: Message): message is Response<any, any> {
  return (
    (message.hasOwnProperty('result') || message.hasOwnProperty('error')) &&
    isStringOrNumber((message as Response<any, any>).id)
  )
}

export function isNotification(message: Message): message is Notification<any, any> {
  return !isRequest(message)
}

export function isBatchableRequest(
  message: Batchable<Message>,
): message is ReadonlyArray<Request<string, any>> {
  return Array.isArray(message) && message.every(isRequest)
}

export function isBatchableResponse(
  message: Batchable<Message>,
): message is ReadonlyArray<Response<any, any>> {
  return Array.isArray(message) && message.every(isResponse)
}
