import { curry } from '../lambda'

export const greaterThan: {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
} = curry(<A>(right: A, left: A) => left > right)
