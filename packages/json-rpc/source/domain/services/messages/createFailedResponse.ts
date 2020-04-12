import { Json } from '@typed/common'
import { Id, JsonRpcError, JsonRpcFailedResponse } from '../../model'

export function createFailedResponse<Code extends number, ErrorData extends Json = never>(
  requestId: Id | null,
  error: JsonRpcError<Code, ErrorData>,
): JsonRpcFailedResponse<Code, ErrorData> {
  return {
    jsonrpc: '2.0',
    id: requestId,
    error,
  }
}
