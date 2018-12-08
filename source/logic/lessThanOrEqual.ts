import { curry } from '../lambda'

export const lessThanOrEqual = curry(<A>(right: A, left: A) => left <= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
