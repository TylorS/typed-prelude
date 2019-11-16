import { createResponseError } from './creators'
import { ErrorCodes } from './error-codes'
import { hasValidParams } from './hasValidParams'
import { isFailure } from './isFailure'
import { JsonRpcRequestHandler, NotificationsFrom, RequestHandlers, ResponseFor } from './types'

export function createRequestHandler<A extends RequestHandlers>(
  requestHandlers: A,
): JsonRpcRequestHandler<A> {
  const stats = {
    openRequestCount: 0,
    requestCount: 0,
    failureResponseCount: 0,
  }
  const sendRequest = createSendRequest(requestHandlers)

  return {
    stats,
    handleRequest: async <R extends NotificationsFrom<A>>(
      request: R,
    ): Promise<ResponseFor<A, R>> => {
      stats.openRequestCount++
      stats.requestCount++

      const response = await sendRequest(request)

      if (isFailure(response)) {
        stats.failureResponseCount++
      }

      stats.openRequestCount--

      return response
    },
  }
}

function createSendRequest<A extends RequestHandlers>(requestHandlers: A) {
  return async <R extends NotificationsFrom<A>>(request: R): Promise<ResponseFor<A, R>> => {
    try {
      hasValidParams(request)

      const handler = requestHandlers[request.method]

      if (!handler) {
        return createResponseError(request, {
          code: ErrorCodes.MethodNotFound,
          message: `Method Not Found: ${request.method}`,
        }) as ResponseFor<A, R>
      }

      const response = await handler(request)

      return response as ResponseFor<A, R>
    } catch (error) {
      return createResponseError(request, {
        code: ErrorCodes.InternalError,
        message: error.message || error,
        data: void 0,
      }) as ResponseFor<A, R>
    }
  }
}
