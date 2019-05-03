import { curry } from './curry'
import { Arity1 } from './types'

/**
 * Perform a side-effect with a value and return the given value.
 * @param fn :: (a -> *)
 * @param value :: a
 * @returns a
 */
export const tap: {
  <A>(fn: Arity1<A>, value: A): A
  <A>(fn: Arity1<A>): (value: A) => A
} = curry(
  <A>(fn: Arity1<A>, value: A): A => {
    fn(value)

    return value
  },
)
