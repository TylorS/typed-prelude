import { curry } from '../../lambda'
import { equals } from '../../logic/equals'
import { Maybe } from '../../maybe'
import { findLastIndex } from '../findLastIndex'

export const lastIndexOf = curry(__lastIndexOf) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}

function __lastIndexOf<A>(value: A, list: ArrayLike<A>): Maybe<number> {
  return findLastIndex(equals(value), list)
}
