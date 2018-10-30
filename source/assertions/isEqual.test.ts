import { describe, given, it, Test } from '@typed/test'

import { isEqual } from './isEqual'

export const test: Test = describe(`isEqual`, [
  given(`an expected and actual value`, [
    it(`returns the actual value if assertion is true`, ({ same }) => {
      const expected = { a: 1 }
      const actual = { a: 1 }

      same(isEqual(expected, actual), actual)
    }),

    it(`throws an error if assertion is false`, ({ same }) => {
      const expected = { a: 1 }
      const actual = { a: 2 }

      try {
        isEqual(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Values are not equal`)
      }
    }),
  ]),
])
