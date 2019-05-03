import { describe, given, it, Test } from '@typed/test'
import { endsWith } from './index'

export const test: Test = describe(`endswith`, [
  given(`an array containing the end of another`, [
    it(`returns true`, ({ ok }) => {
      const list = [1, 2, 3, 4, 5]
      const end = list.slice(3)

      ok(endsWith(end, list))
    }),
  ]),

  given(`2 non-overlapping arrays`, [
    it(`returns false`, ({ notOk }) => {
      const a = [1, 2, 3]
      const b = [4, 5, 6]

      notOk(endsWith(a, b))
    }),
  ]),
])
