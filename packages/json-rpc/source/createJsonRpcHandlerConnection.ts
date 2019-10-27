import { Disposable } from '@typed/disposable'
import { isNotification, isRequest } from './is'
import { JsonRpcHandler, MessageContext } from './types'

export type CreateJsonRpcHandlerConnectionOptions = {
  readonly handler: JsonRpcHandler
  readonly context: MessageContext
}

export function createJsonRpcHandlerConnection({
  handler,
  context,
}: CreateJsonRpcHandlerConnectionOptions): Disposable {
  const { incoming, outgoing } = context

  return incoming.subscribe(async message => {
    if (isNotification(message)) {
      return handler.sendNotification(message)
    }

    if (isRequest(message)) {
      return outgoing.publish(await handler.sendRequest(message))
    }
  })
}
