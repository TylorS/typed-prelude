import { curry } from '@typed/lambda'
import { chain, Maybe } from '@typed/maybe'
import { prop } from './prop'
import { ObjectPath } from './types'

/**
 * Get value at a given path.
 */
export const path = curry(
  <Keys extends PropertyKey[], A extends object>(keys: Keys, obj: A): Maybe<ObjectPath<A, Keys>> =>
    (keys.length === 0
      ? Maybe.of(obj)
      : keys.length === 1
      ? prop(keys[0], obj)
      : keys
          .slice(1)
          .reduce(
            (maybe, key) => chain(prop(key) as any, maybe) as any,
            prop(keys[0], obj),
          )) as Maybe<ObjectPath<A, Keys>>,
) as {
  <Keys extends PropertyKey[], A extends object>(keys: Keys, obj: A): Maybe<ObjectPath<A, Keys>>
  <Keys extends PropertyKey[]>(keys: Keys): <A extends object>(obj: A) => Maybe<ObjectPath<A, Keys>>
}
