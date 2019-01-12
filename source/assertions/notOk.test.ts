import { describe, given, it, Test } from '@typed/test'

import { notOk } from './notOk'

export const test: Test = describe(`notOk`, [
  given(`given false`, [
    it(`returns false`, ({ same }) => {
      const value = notOk(false)

      same(value, false)
    }),

    it(`throws an Error`, ({ throws }) => {
      throws(() => notOk(true))
    }),
  ]),
])
