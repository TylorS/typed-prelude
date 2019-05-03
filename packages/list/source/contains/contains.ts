import { curry } from '@typed/lambda'
import { isJust } from '@typed/maybe'
import { indexOf } from '../indexOf'

/**
 * Returns true if a value is contained in a given list otherwise false.
 *
 * @param value :: a
 * @param list :: [a]
 * @returns :: boolean
 */
export const contains = curry((value, list) => isJust(indexOf(value, list))) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}
