import { isObject } from '@typed/logic'
import { map, withDefault } from '@typed/maybe'
import { getNotificationParams } from './getNotificationParams'
import { Notification } from './json-rpc'

export function hasValidParams(request: Notification<string, any>): boolean {
  return withDefault(
    true,
    map(params => Array.isArray(params) || isObject(params), getNotificationParams(request)),
  )
}
