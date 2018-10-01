import { curry } from '../lambda'

export const lessThanOrEqual: {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
} = curry(<A>(right: A, left: A) => left <= right)
