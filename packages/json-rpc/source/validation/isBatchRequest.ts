import { Message, RequestBatch } from '../protocol'
import { isBatch } from './common'
import { isRequest } from './isRequest'

export function isBatchRequest(message: Message): message is RequestBatch {
  return isBatch(message) && message.every(isRequest)
}
