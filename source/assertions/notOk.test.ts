import { describe, given, it, Test } from '@typed/test'

import { notOk } from './notOk'

export const test: Test = describe(`notOk`, [
  given(`given false`, [
    it(`returns false`, ({ same }) => {
      const value = notOk(false)

      same(value, false)
    }),

    it(`throws an Error`, ({ same }) => {
      try {
        notOk(true)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Value was expected to be false`)
      }
    }),
  ]),
])
