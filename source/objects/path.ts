import { curry } from 'source/lambda'
import { chain, Maybe } from '../maybe'
import { prop } from './prop'
import { Path } from './types'

export const path = curry(
  <Keys extends PropertyKey[], A extends object>(keys: Keys, obj: A): Maybe<Path<A, Keys>> =>
    keys.length === 0
      ? Maybe.of(obj)
      : keys.length === 1
        ? prop(keys[0], obj)
        : keys.slice(1).reduce((maybe, key) => chain(prop(key), maybe), prop(keys[0], obj)),
)
