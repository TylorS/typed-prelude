import { describe, given, it, Test } from '@typed/test'

import { isSame } from './isSame'

export const test: Test = describe(`isSame`, [
  given(`an expected and actual value`, [
    it(`returns actual value if assertion is true`, ({ equal }) => {
      const expected = 2
      const actual = 2

      equal(actual, isSame(expected, actual))
    }),

    it(`throws an error if assertion is false`, ({ equal }) => {
      const expected = 1
      const actual = 2

      try {
        isSame(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        equal(e.message, `Values are not same`)
      }
    }),
  ]),
])
