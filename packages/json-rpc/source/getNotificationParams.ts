import { Maybe } from '@typed/maybe'
import { Notification, NotificationParams } from './json-rpc'

export function getNotificationParams<A extends Notification<string, any>>(
  notification: A,
): Maybe<NotificationParams<A>> {
  return Maybe.of((notification as any).params)
}
