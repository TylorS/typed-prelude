import { Message, Request } from '../protocol'
import { hasId, hasValidMethod, hasValidParams, isJsonRpcV2 } from './common'

export function isRequest(message: Message): message is Request<any, any> {
  return (
    isJsonRpcV2(message) && hasValidMethod(message) && hasId(message) && hasValidParams(message)
  )
}
