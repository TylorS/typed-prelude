import { isFunction, isMap, isSet, Json, JsonArray, JsonObject, JsonPrimitive } from '@typed/common'
import { Is } from '@typed/lambda'
import { all } from './all'
import { or } from './or'

export { isFunction, isMap, isSet }

export function isUndefined(x: unknown): x is undefined {
  return x === undefined
}

export function isNotUndefined<A>(x: A | undefined): x is A {
  return x !== undefined
}

export function isNull(x: unknown): x is null {
  return x === null
}

export function isNotNull<A>(value: A): value is Exclude<A, null> {
  return value !== null
}

export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x)
}

export function isIterator<A = unknown>(x: unknown): x is Iterator<A> {
  return x && isFunction((x as Iterator<A>).next)
}

export function isIterable(x: unknown): x is Iterable<unknown> {
  return x && isFunction((x as Iterable<unknown>)[Symbol.iterator])
}

export function isGenerator(x: unknown): x is Generator<unknown, unknown, unknown> {
  return (
    isIterable(x) &&
    isFunction((x as Generator).next) &&
    isFunction((x as Generator).return) &&
    isFunction((x as Generator).throw)
  )
}

export function isArrayLike<A = unknown>(x: unknown): x is ArrayLike<A> {
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

export function isNumber(x: any): x is number {
  return typeof x === 'number' && !Number.isNaN(x)
}

export function isString(x: any): x is string {
  return typeof x === 'string'
}

export function isObject(x: any): x is Object {
  return x && typeof x === 'object'
}

export function isPromiseLike<A = any>(x: any): x is PromiseLike<A> {
  return x && isFunction(x.then)
}

export const isBoolean: Is<boolean> = [isTrue, isFalse].reduce(or)

export function isTrue(x: unknown): x is true {
  return x === true
}

export function isFalse(x: unknown): x is false {
  return x === false
}

export const isJsonPrimitive: (x: unknown) => x is JsonPrimitive = [
  isString,
  isNumber,
  isBoolean,
  isNull,
].reduce(or)

export const isJson: (x: unknown) => x is Json = or(isJsonPrimitive, or(isJsonArray, isJsonObject))

export function isJsonArray(x: unknown): x is JsonArray {
  return isArray(x) && all(isJson, x)
}

export function isJsonObject(x: unknown): x is JsonObject {
  return isObject(x) && all(isString, Object.keys(x)) && all(isJson, Object.values(x))
}
