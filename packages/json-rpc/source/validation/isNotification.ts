import { Message, Notification } from '../protocol'
import { hasId, hasValidMethod, hasValidParams, isJsonRpcV2 } from './common'

export function isNotification(message: Message): message is Notification<any, any> {
  return (
    isJsonRpcV2(message) && hasValidMethod(message) && !hasId(message) && hasValidParams(message)
  )
}
