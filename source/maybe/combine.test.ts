import { describe, given, it, Test } from '@typed/test'
import { fromJust, isJust, Just } from './'

import { combine } from './combine'

export const test: Test = describe(`combine`, [
  given(`(a -> b -> c) -> Just a -> Just b`, [
    it(`returns Just c`, ({ equal }) => {
      const a = Just.of(1)
      const b = Just.of(2)

      const f = (x: number, y: number) => x + y

      const c = combine(f, a, b)
      const expected = 3

      if (isJust(c)) {
        equal(expected, fromJust(c))
      }
    }),
  ]),
])
