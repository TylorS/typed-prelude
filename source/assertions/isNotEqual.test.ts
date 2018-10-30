import { describe, given, it, Test } from '@typed/test'

import { isNotEqual } from './isNotEqual'

export const test: Test = describe(`isNotEqual`, [
  given(`an expected and actual value`, [
    it(`returns the actual value if assertion is true`, ({ equal }) => {
      const expected = { a: 1 }
      const actual = { a: 2 }

      equal(isNotEqual(expected, actual), actual)
    }),

    it(`throws an AssertionError if assertion is false`, ({ same }) => {
      const expected = { a: 1 }
      const actual = { a: 1 }

      try {
        isNotEqual(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Values not expected to be equal`)
      }
    }),
  ]),
])
