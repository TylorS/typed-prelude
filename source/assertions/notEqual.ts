import { curry } from '@typed/lambda'
import * as assert from 'power-assert'

export const notEqual: {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
} = curry(
  <A>(expected: A, actual: A): A => {
    assert.notDeepStrictEqual(expected, actual)

    return actual
  },
)
