import { always, pipe } from '@typed/lambda'
import { unwrap } from '@typed/maybe'
import { getNotificationParams } from './getNotificationParams'
import { Notification, NotificationParams, ParameterizedNotification } from './json-rpc'

export type NotificationHandler<
  A extends Notification<string, any>
> = A extends ParameterizedNotification<string, any>
  ? (params: NotificationParams<A>) => void
  : () => void

export function createNotificationHandler<A extends Notification<string, any>>(
  fn: NotificationHandler<A>,
) {
  return (notification: A) => {
    const hasParams = unwrap(
      pipe(
        fn,
        always(true),
      ),
      getNotificationParams(notification),
    )

    if (!hasParams) {
      ;(fn as () => void)()
    }
  }
}
