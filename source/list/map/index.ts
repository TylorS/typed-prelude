import { mapArrayLike } from '@typed/common'
import { Arity1, curry } from '@typed/lambda'

/**
 * Map over a list of values
 * @param f :: (a -> b)
 * @param list :: [a]
 * @returns :: [b]
 */
export const map = curry((f, list) => mapArrayLike(f, list)) as {
  <A, B>(fn: Arity1<A, B>, list: ArrayLike<A>): B[]
  <A, B>(fn: Arity1<A, B>): (list: ArrayLike<A>) => B[]
}
