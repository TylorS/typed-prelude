import { describe, given, it, Test } from '../../test'
import { AssertionError } from './AssertionError'

export const test: Test = describe(`AssertionError`, [
  given(`a message, expected and actual values`, [
    it(`is a instanceof Error`, ({ ok }) => {
      const error = new AssertionError('', '', '')

      ok(error instanceof Error)
    }),

    it(`returns object with .message, .expected, and .actual properties`, ({ equal }) => {
      const message = 'Foo'
      const expected = 1
      const actual = 2

      const error = new AssertionError(message, expected, actual)

      equal(message, error.message)
      equal(expected, error.expected)
      equal(actual, error.actual)
    }),
  ]),
])
