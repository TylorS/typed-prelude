import { Message, ResponseBatch } from '../protocol'
import { isBatch } from './common'
import { isResponse } from './isResponse'

export function isBatchResponse(message: Message): message is ResponseBatch {
  return isBatch(message) && message.every(isResponse)
}
