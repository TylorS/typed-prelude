import { Disposable } from '@typed/disposable'
import { isBatchable, isNotification, isRequest } from './is'
import { Message, Notification, Request } from './json-rpc'
import { JsonRpcHandler, MessageContext } from './types'

export type CreateJsonRpcHandlerConnectionOptions = {
  readonly handler: JsonRpcHandler
  readonly context: MessageContext
  readonly batchResponses?: boolean
}

export function createJsonRpcHandlerConnection({
  handler,
  context,
  batchResponses = true,
}: CreateJsonRpcHandlerConnectionOptions): Disposable {
  const { incoming, outgoing } = context

  return incoming.subscribe(async message => {
    if (isBatchable(message)) {
      const promises = message.map(msg => handler.sendRequest(msg))

      if (batchResponses) {
        return outgoing.publish(await Promise.all(promises))
      }

      return promises.map(p => p.then(outgoing.publish))
    }

    if (isRequest(message as Message)) {
      return outgoing.publish(await handler.sendRequest(message as Request<any, any>))
    }

    if (isNotification(message as Message)) {
      return handler.sendNotification(message as Notification<any, any>)
    }
  })
}
