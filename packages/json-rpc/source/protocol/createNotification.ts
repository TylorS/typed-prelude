import { StructuredJson } from './Json'
import { Notification } from './Notification'

export function createNotification<Method extends string, Params extends StructuredJson = never>(
  method: Method,
  params: Params,
): Notification<Method, Params>

export function createNotification<Method extends string>(method: Method): Notification<Method>

export function createNotification<Method extends string, Params extends StructuredJson = never>(
  method: Method,
  params?: Params,
): Notification<Method, Params> {
  const notification: any = {
    jsonrpc: '2.0',
    method,
  }

  if (params) {
    notification.params = params
  }

  return notification
}
