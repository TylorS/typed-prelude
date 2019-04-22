import { curry } from '@typed/lambda'

/**
 * Compare two values using <=
 * @param right :: a
 * @param left :: a
 * @returns :: boolean
 */
export const lessThanOrEqual = curry(<A>(right: A, left: A) => left <= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
