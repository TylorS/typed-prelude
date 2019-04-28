import { indexOf } from '@typed/common'
import { curry } from '@typed/lambda'

/**
 * Returns true if a given value is contained in a list
 * @param value :: a
 * @param list :: [a]
 * @returns :: boolean
 */
export const includes = curry(
  <A>(value: A, list: ArrayLike<A>): boolean => indexOf(list, value) > -1,
) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}
