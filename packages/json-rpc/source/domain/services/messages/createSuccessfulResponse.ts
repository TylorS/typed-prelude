import { Id, JsonRpcSuccessfulResponse, StructuredJson } from '../../model'

export function createSuccessfulResponse<R extends StructuredJson>(
  requestId: Id,
  result: R,
): JsonRpcSuccessfulResponse<R> {
  return {
    jsonrpc: '2.0',
    id: requestId,
    result,
  }
}
