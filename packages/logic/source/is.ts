import { isFunction, isMap, isSet, Json, JsonArray, JsonObject, JsonPrimitive } from '@typed/common'
import { Is, IsNot, pipe2 } from '@typed/lambda'
import { all } from './all'
import { complement } from './complement'
import { equals } from './equals'
import { not } from './not'
import { or } from './or'

export { isFunction, isMap, isSet }

export const is = <A>(value: A): Is<A> => equals(value) as any
export const isNot = <A>(a: A): IsNot<A> => pipe2(is(a), not) as any

export const isAndIsNot = <A>(value: A): readonly [Is<A>, IsNot<A>] =>
  [is(value), isNot(value)] as const

export const isNotFunction: IsNot<Function> = complement(isFunction)
export const isNotMap: IsNot<Map<unknown, unknown>> = complement(isMap)
export const isNotSet: IsNot<Set<unknown>> = complement(isSet)

export const [isUndefined, isNotUndefined] = isAndIsNot(undefined)
export const [isNull, isNotNull] = isAndIsNot(null)

export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x)
}
export const isNotArray = pipe2(isArray, not) as IsNot<ReadonlyArray<unknown>>

export function isIterator(x: unknown): x is Iterator<unknown> {
  return x && isFunction((x as Iterator<unknown>).next)
}
export const isNotIterator: IsNot<Iterator<unknown>> = complement(isIterable)

export function isIterable(x: unknown): x is Iterable<unknown> {
  return x && isFunction((x as Iterable<unknown>)[Symbol.iterator])
}
export const isNotIterable: IsNot<Iterable<unknown>> = complement(isIterable)

export const isGenerator: Is<Generator<unknown, unknown, unknown>> = (
  x: unknown,
): x is Generator<unknown, unknown, unknown> => {
  return (
    isIterable(x) &&
    isFunction((x as Generator).next) &&
    isFunction((x as Generator).return) &&
    isFunction((x as Generator).throw)
  )
}
export const isNotGenerator = complement(isGenerator)

export const isArrayLike: Is<ArrayLike<unknown>> = (x): x is ArrayLike<unknown> => {
  if (isArray(x)) {
    return true
  }

  if (!x || !isObject(x) || !isString(x)) {
    return false
  }

  const asObj: { length: number } = x

  if (asObj.length === 0) {
    return true
  }

  if (asObj.length > 0) {
    return (
      Object.prototype.hasOwnProperty.call(x, 0) &&
      Object.prototype.hasOwnProperty.call(x, asObj.length - 1)
    )
  }

  return false
}
export const isNotArrayLike = complement(isArrayLike)

export const isNumber: Is<number> = (u): u is number => typeof u === 'number' && !Number.isNaN(u)
export const isNotNumber: IsNot<number> = complement(isNumber)

export const isString: Is<string> = (u): u is string => typeof u === 'string'
export const isNotString: IsNot<string> = complement(isString)

export const isObject: Is<object> = (u): u is object => typeof u === 'object'
export const isNotObject: IsNot<object> = complement(isObject)

export const isRecord: Is<Readonly<Record<PropertyKey, unknown>>> = (
  u,
): u is Readonly<Record<PropertyKey, unknown>> =>
  u && isObject(u) && isNotArrayLike(u) && isNotMap(u) && isNotSet(u)
export const isNotRecord: IsNot<Readonly<Record<PropertyKey, unknown>>> = complement(isRecord)

export const isPromiseLike: Is<PromiseLike<unknown>> = (x: unknown): x is PromiseLike<unknown> =>
  x && isObject(x) && isFunction((x as PromiseLike<unknown>).then)
export const isNotPromiseLie: IsNot<PromiseLike<unknown>> = complement(isPromiseLike)

export const [isTrue, isNotTrue] = isAndIsNot<true>(true)
export const [isFalse, isNotFalse] = isAndIsNot<false>(false)

export const isBoolean: Is<boolean> = or(isTrue, isFalse)
export const isNotBoolean: IsNot<boolean> = complement(isBoolean)

export const isJsonArray: Is<JsonArray> = function isJsonArray(x: unknown): x is JsonArray {
  return isArray(x) && all(isJson, x)
}
export const isNotJsonArray: IsNot<JsonArray> = complement(isJsonArray)

export const isJsonObject: Is<JsonObject> = function isJsonObject(x: unknown): x is JsonObject {
  return (
    !isArray(x) && isObject(x) && all(isString, Object.keys(x)) && all(isJson, Object.values(x))
  )
}
export const isNotJsonObject: IsNot<JsonObject> = complement(isJsonObject)

export const isJsonPrimitive: Is<JsonPrimitive> = or(isString, or(isNumber, or(isBoolean, isNull)))
export const isNotJsonPrimitive: IsNot<JsonPrimitive> = complement(isJsonPrimitive)

export const isJson: Is<Json> = or(isJsonPrimitive, or(isJsonArray, isJsonObject))
export const isNotJson: IsNot<Json> = complement(isJson)

export const isDate: Is<Date> = (u): u is Date => u instanceof Date
export const isNotDate: IsNot<Date> = complement(isDate)
