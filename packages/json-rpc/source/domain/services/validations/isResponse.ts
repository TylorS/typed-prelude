import { all, and, equals, isArray, isNumber, isObject, isString, or } from '@typed/logic'
import { hasOwnProperty } from '@typed/objects'
import { JsonRpcFailedResponse, JsonRpcResponse, JsonRpcSuccessfulResponse } from '../../model'

const REQUIRED_KEYS: ReadonlyArray<keyof JsonRpcResponse> = ['jsonrpc', 'id']
const OPTIONAL_KEYS: ReadonlyArray<Exclude<
  keyof JsonRpcFailedResponse | keyof JsonRpcSuccessfulResponse,
  keyof JsonRpcResponse
>> = ['result', 'error']

const VALIDATE_RESPONSE_VALUES: {
  [K in keyof JsonRpcFailedResponse | keyof JsonRpcSuccessfulResponse]: (value: unknown) => boolean
} = {
  jsonrpc: and(isString, equals('2.0')),
  id: or(isString, isNumber),
  result: or(isArray, isObject),
  error: or(isString, isNumber),
}

export const isSuccessfulResponse: (x: unknown) => x is JsonRpcSuccessfulResponse = and(
  isResponse,
  hasOwnProperty('result'),
)

export const isFailedResponse: (x: unknown) => x is JsonRpcFailedResponse = and(
  isResponse,
  hasOwnProperty('error'),
)

export function isResponse(x: unknown): x is JsonRpcResponse {
  if (!isObject(x)) {
    return false
  }

  const hasPropertyAndIsValid = (
    key: keyof JsonRpcFailedResponse | keyof JsonRpcSuccessfulResponse,
  ) => hasOwnProperty(key, x) && VALIDATE_RESPONSE_VALUES[key](x[key])

  if (!all(hasPropertyAndIsValid, REQUIRED_KEYS)) {
    return false
  }

  return OPTIONAL_KEYS.reduce(
    (valid, key) => (valid ? hasPropertyAndIsValid(key) : false),
    true as boolean,
  )
}
