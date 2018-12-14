import { describe, given, it, Test } from '@typed/test'
import { drop } from './drop'

export const test: Test = describe(`drop`, [
  given(`number -> [a]`, [
    it(`returns [a]`, ({ equal }) => {
      const list = [1, 2, 3]
      const expected = [3]
      const qty = 2

      equal(expected, drop(qty, list))
    }),
  ]),
])
