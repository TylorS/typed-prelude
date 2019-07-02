import { curry } from '@typed/lambda'

/**
 * Compare two values using <=
 * @param right :: a
 * @param left :: a
 * @returns :: boolean
 */
export const lessThanOrEqual: {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
} = curry(<A>(right: A, left: A) => left <= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
