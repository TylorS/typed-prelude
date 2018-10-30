import { curry } from '../lambda'
import { equals } from '../logic'
import { AssertionError } from './AssertionError'

export const isNotEqual: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    if (equals(expected, actual)) {
      throw new AssertionError('Values not expected to be equal', expected, actual)
    }

    return actual
  },
)
