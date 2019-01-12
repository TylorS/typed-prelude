import { describe, given, it, Test } from '@typed/test'

import { notEqual } from './notEqual'

export const test: Test = describe(`notEqual`, [
  given(`an expected and actual value`, [
    it(`returns the actual value if assertion is true`, ({ equal }) => {
      const expected = { a: 1 }

      const actual = { a: 2 }

      equal(notEqual(expected, actual), actual)
    }),

    it(`throws an AssertionError if assertion is false`, ({ notOk }) => {
      const expected = { a: 1 }
      const actual = { a: 1 }

      try {
        notEqual(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        notOk(e.message === `Should throw error`)
      }
    }),
  ]),
])
