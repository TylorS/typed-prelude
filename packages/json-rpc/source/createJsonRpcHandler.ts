import { createResponse, createResponseError } from './creators'
import { ErrorCodes } from './error-codes'
import { hasValidParams } from './hasValidParams'
import { isFailure } from './isFailure'
import {
  JsonRpcHandler,
  JsonRpcStats,
  NotificationHandlers,
  NotificationsFrom,
  RequestHandlers,
  ResponseFor,
} from './types'

export const RPC_STATS_METHOD = 'rpc.stats'
export type RPC_STATS_METHOD = typeof RPC_STATS_METHOD

export function createJsonRpcHandler<
  Methods extends Exclude<keyof A, number | PropertyKey>,
  A extends RequestHandlers<Methods>,
  B extends NotificationHandlers
>(requestHandlers: A, notificationHandlers: B): JsonRpcHandler<A, B> {
  const stats = {
    openRequestCount: 0,
    requestCount: 0,
    failureResponseCount: 0,
    notificationCount: 0,
  }
  const sendRequest = createSendRequest(requestHandlers, stats)
  const sendNotification = <A extends NotificationsFrom<B>>(notification: A) => {
    const { method } = notification

    if (method in notificationHandlers) {
      notificationHandlers[method](notification)
    }
  }

  return {
    stats,
    sendRequest: async <R extends NotificationsFrom<A>>(request: R): Promise<ResponseFor<A, R>> => {
      stats.openRequestCount++
      stats.requestCount++

      const response = await sendRequest(request)

      if (isFailure(response)) {
        stats.failureResponseCount++
      }

      stats.openRequestCount--

      return response
    },
    sendNotification: <A extends NotificationsFrom<B>>(notification: A) => {
      stats.notificationCount++

      sendNotification(notification)
    },
  }
}

function createSendRequest<
  Methods extends Exclude<keyof A, number | PropertyKey>,
  A extends RequestHandlers<Methods>
>(requestHandlers: A, stats: JsonRpcStats) {
  return async <R extends NotificationsFrom<A>>(request: R): Promise<ResponseFor<A, R>> => {
    if (request.method === RPC_STATS_METHOD) {
      return createResponse(request, stats) as ResponseFor<A, R>
    }

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
