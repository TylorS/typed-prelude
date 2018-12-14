import { describe, given, it, Test } from '@typed/test'
import { dropLast } from './dropLast'

export const test: Test = describe(`dropLast`, [
  given(`number -> [a]`, [
    it(`returns [a]`, ({ equal }) => {
      const list = [1, 2, 3]
      const expected = [1]
      const qty = 2

      equal(expected, dropLast(qty, list))
    }),
  ]),
])
