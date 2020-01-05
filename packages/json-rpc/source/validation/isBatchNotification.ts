import { Message, NotificationBatch } from '../protocol'
import { isBatch } from './common'
import { isNotification } from './isNotification'

export function isBatchNotification(message: Message): message is NotificationBatch {
  return isBatch(message) && message.every(isNotification)
}
