import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { findLastIndex } from '../findLastIndex'

/**
 * Find the last index of a given value in a list
 * @param value :: a
 * @param list :: [a]
 * @returns Maybe number
 */
export const lastIndexOf = curry(__lastIndexOf) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}

function __lastIndexOf<A>(value: A, list: ArrayLike<A>): Maybe<number> {
  return findLastIndex(equals(value), list)
}
