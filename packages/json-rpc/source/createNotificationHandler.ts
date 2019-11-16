import { JsonRpcNotificationHandler, NotificationHandlers, NotificationsFrom } from './types'

export function createNotificationHandler<
  Methods extends Exclude<keyof A, number | PropertyKey>,
  A extends NotificationHandlers<Methods>
>(handlers: A): JsonRpcNotificationHandler<A> {
  const stats = {
    notificationCount: 0,
  }

  return {
    stats,
    handleNotification: <R extends NotificationsFrom<A>>(notification: R) => {
      stats.notificationCount++

      if (notification.method in handlers) {
        handlers[notification.method](notification)
      }
    },
  }
}
