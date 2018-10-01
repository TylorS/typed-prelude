import { Nothing } from 'source'
import { curry } from '../lambda'
import { Maybe } from '../maybe'
import { hasOwnProperty } from './hasOwnProperty'

export const prop = curry(
  <K extends PropertyKey, O extends Partial<Record<K, any>>>(key: K, obj: O): Maybe<O[K]> =>
    hasOwnProperty(key, obj) ? Maybe.of(obj[key]) : Nothing,
)

export const propOf: {
  <K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K]
  <K extends PropertyKey>(key: K): <O extends Record<K, any>>(obj: O) => O[K]
} = curry(<K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K] => obj[key])
