import { always, pipe } from '@typed/lambda'
import { unwrap } from '@typed/maybe'
import { getNotificationParams } from './getNotificationParams'
import { Notification, NotificationParams, ParameterizedNotification } from './json-rpc'

const toTrue = always(true)

export function handleNotification<A extends Notification<string, any>>(
  fn: A extends ParameterizedNotification<string, any>
    ? (params: NotificationParams<A>) => void
    : () => void,
) {
  const callFn = pipe(
    fn,
    toTrue,
  )

  return (notification: A) => {
    if (!unwrap(callFn, getNotificationParams(notification))) {
      ;(fn as () => void)()
    }
  }
}
