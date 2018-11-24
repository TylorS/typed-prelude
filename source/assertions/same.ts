import { curry } from '../lambda'
import { AssertionError } from './AssertionError'

export const same: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    if (expected !== actual) {
      throw new AssertionError('Values are not same', expected, actual)
    }

    return actual
  },
)
