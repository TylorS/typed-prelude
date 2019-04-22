import { curry } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'
import { hasOwnProperty } from './hasOwnProperty'

/**
 * Get a value from an object.
 */
export const prop = curry(
  <K extends PropertyKey, O extends Partial<{ [_ in K]: any }>>(key: K, obj: O): Maybe<O[K]> =>
    hasOwnProperty(key, obj) ? Maybe.of(obj[key]) : Nothing,
) as {
  <K extends PropertyKey, O extends Partial<{ [_ in K]: any }>>(key: K, obj: O): Maybe<O[K]>
  <K extends PropertyKey>(key: K): <O extends Partial<{ [_ in K]: any }>>(obj: O) => Maybe<O[K]>
}

export const propOf = curry(
  <K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K] => obj[key],
) as {
  <K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K]
  <K extends PropertyKey>(key: K): <O extends Record<K, any>>(obj: O) => O[K]
}
