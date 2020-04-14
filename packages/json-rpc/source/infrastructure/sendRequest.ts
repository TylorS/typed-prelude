import {
  ConnectionEnv,
  SendRequest,
  JsonRpcRequest,
  JsonRpcResponse,
  MessageDirection,
  getOppositeDirection,
} from '../domain'
import { fork, Fork, join, Join, FiberFailure } from '@typed/effects'
import { waitForResponse } from './waitForResponse'
import { sendMessage } from './sendMessage'

export const sendRequest: SendRequest<ConnectionEnv & Fork & Join & FiberFailure> = function*<
  A extends JsonRpcRequest,
  B extends JsonRpcResponse
>(request: A, direction: MessageDirection) {
  const fiber = yield* fork(waitForResponse(request.id, getOppositeDirection(direction)))

  yield* sendMessage(request, direction)

  const response = yield* join(fiber)

  return response as B
}
