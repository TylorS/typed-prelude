import { strictEqual } from 'power-assert'
import { curry } from '../lambda'
export const same: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    strictEqual(actual, expected)

    return actual
  },
)
