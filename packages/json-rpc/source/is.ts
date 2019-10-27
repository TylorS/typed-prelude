import { Id, Message, Notification, Request, Response } from './json-rpc'

export function isRequest(message: Message): message is Request<any, any> {
  return !!message && message.hasOwnProperty('id')
}

export function isResponse<A extends Response<any, any>>(id: Id, message: Message): message is A {
  return (
    (message as A).id === id &&
    (message.hasOwnProperty('result') || message.hasOwnProperty('error'))
  )
}

export function isNotification(message: Message): message is Notification<any, any> {
  return !isRequest(message)
}
