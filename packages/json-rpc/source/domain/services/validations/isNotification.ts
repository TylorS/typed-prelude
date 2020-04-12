import { pipe } from '@typed/lambda'
import { all, equals, isArray, isObject, isString, or } from '@typed/logic'
import { hasOwnProperty } from '@typed/objects'
import { JsonRpcNotification } from '../../model'

const REQUIRED_KEYS: ReadonlyArray<keyof JsonRpcNotification<any, never>> = ['jsonrpc', 'method']
const OPTIONAL_KEYS: ReadonlyArray<Exclude<
  keyof JsonRpcNotification<any, any>,
  keyof JsonRpcNotification<any, never>
>> = ['params']

const VALIDATE_NOTIFICATION_KEYS: {
  [K in keyof JsonRpcNotification<any, any>]: (value: unknown) => boolean
} = {
  jsonrpc: pipe(isString, equals('2.0')),
  method: isString,
  params: or(isArray, isObject),
}

export function isNotification(x: unknown): x is JsonRpcNotification {
  if (!isObject(x)) {
    return false
  }

  const hasPropertyAndIsValid = (key: keyof JsonRpcNotification<any, any>) =>
    hasOwnProperty(key, x) && VALIDATE_NOTIFICATION_KEYS[key](x[key])

  if (!all(hasPropertyAndIsValid, REQUIRED_KEYS)) {
    return false
  }

  return OPTIONAL_KEYS.reduce(
    (valid, key) => (valid ? hasPropertyAndIsValid(key) : false),
    true as boolean,
  )
}
