import { Disposable } from '@typed/disposable'
import { isBatchableRequest, isNotification, isRequest } from './is'
import { Message, Notification, Request } from './json-rpc'
import { JsonRpcMessageSender, JsonRpcNotificationHandler, JsonRpcRequestHandler } from './types'

export type CreateJsonRpcHandlerConnectionOptions = {
  readonly requestHandler: JsonRpcRequestHandler
  readonly notificationHandler: JsonRpcNotificationHandler
  readonly sender: JsonRpcMessageSender
  readonly batchResponses?: boolean
}

export function createJsonRpcHandlerConnection({
  requestHandler,
  notificationHandler,
  sender,
  batchResponses = true,
}: CreateJsonRpcHandlerConnectionOptions): Disposable {
  const { incoming } = sender.context

  return incoming.subscribe(async message => {
    if (isBatchableRequest(message)) {
      const promises = message.map(msg => requestHandler.handleRequest(msg))

      if (batchResponses) {
        return sender.sendResponse(await Promise.all(promises))
      }

      return promises.forEach(p => p.then(sender.sendResponse))
    }

    if (isRequest(message as Message)) {
      return sender.sendResponse(await requestHandler.handleRequest(message as Request<any, any>))
    }

    if (isNotification(message as Message)) {
      return notificationHandler.handleNotification(message as Notification<any, any>)
    }
  })
}
