import { curry } from '@typed/lambda'

/**
 * Compares two values with >=
 * @param right :: a
 * @param right :: b
 * @returns :: boolean
 */
export const greaterThanOrEqual: {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
} = curry(<A>(right: A, left: A) => left >= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
