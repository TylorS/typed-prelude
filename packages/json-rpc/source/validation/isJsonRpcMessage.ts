import { Message } from '../protocol'
import { isBatchRequest } from './isBatchRequest'
import { isBatchResponse } from './isBatchResponse'
import { isNotification } from './isNotification'
import { isRequest } from './isRequest'
import { isResponse } from './isResponse'

export function isJsonRpcMessage(x: any): x is Message {
  return (
    isRequest(x) || isResponse(x) || isNotification(x) || isBatchRequest(x) || isBatchResponse(x)
  )
}
