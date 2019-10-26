import { createResponseError } from './creators'
import { ErrorCodes } from './error-codes'
import { hasValidParams } from './hasValidParams'
import { isFailure } from './isFailure'
import {
  JsonRpcHandler,
  NotificationHandlers,
  NotificationsFrom,
  RequestHandlers,
  ResponseFor,
} from './types'

export function createJsonRpcHandler<
  Methods extends Exclude<keyof A, number | PropertyKey>,
  A extends RequestHandlers<Methods>,
  B extends NotificationHandlers
>(requestHandlers: A, notificationHandlers: B): JsonRpcHandler<A, B> {
  const sendRequest = createSendRequest(requestHandlers)
  const sendNotification = <A extends NotificationsFrom<B>>(notification: A) =>
    notificationHandlers[notification.method](notification)

  const stats = {
    openRequestCount: 0,
    requestCount: 0,
    failureResponseCount: 0,
    notificationCount: 0,
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
>(requestHandlers: A) {
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
