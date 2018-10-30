import { curry } from '../lambda'
import { AssertionError } from './AssertionError'

export const isSame: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    if (expected === actual) {
      throw new AssertionError('Values expected not to be same', expected, actual)
    }

    return actual
  },
)
