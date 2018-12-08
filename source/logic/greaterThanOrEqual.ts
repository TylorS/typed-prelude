import { curry } from '../lambda'

export const greaterThanOrEqual = curry(<A>(right: A, left: A) => left >= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
