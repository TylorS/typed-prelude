import { hasValidParams } from './hasValidParams'
import {
  Notification,
  NotificationParams,
  ParameterizedNotification,
  ParameterizedRequest,
  Request,
} from './json-rpc'

export function isParameterizedNotification<A extends Notification<string, any>>(
  notification: A,
): notification is A & { readonly params: NotificationParams<A> } {
  return (
    !!(notification as ParameterizedNotification<string, any>).params &&
    hasValidParams(notification)
  )
}

export function isParameterizedRequest<A extends Request<string, any>>(
  request: A,
): request is A & { readonly params: NotificationParams<A> } {
  return !!(request as ParameterizedRequest<string, any>).params && hasValidParams(request)
}
