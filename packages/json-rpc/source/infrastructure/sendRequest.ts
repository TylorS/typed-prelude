import { FiberFailure, fork, Fork, join, Join } from '@typed/effects'
import {
  ConnectionEnv,
  getOppositeDirection,
  JsonRpcRequest,
  JsonRpcResponse,
  MessageDirection,
  SendRequest,
} from '../domain'
import { sendMessage } from './sendMessage'
import { waitForResponse } from './waitForResponse'

export const sendRequest: SendRequest<ConnectionEnv & Fork & Join & FiberFailure> = function* <
  A extends JsonRpcRequest,
  B extends JsonRpcResponse
>(request: A, direction: MessageDirection) {
  const fiber = yield* fork(waitForResponse(request.id, getOppositeDirection(direction)))

  yield* sendMessage(request, direction)

  const response = yield* join(fiber)

  return response as B
}
