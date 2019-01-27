import { curry } from '@typed/lambda'
import * as assert from 'power-assert'

export const equal: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    assert.deepStrictEqual(actual, expected)

    return actual
  },
)
