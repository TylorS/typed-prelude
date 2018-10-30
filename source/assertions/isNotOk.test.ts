import { describe, given, it, Test } from '@typed/test'

import { isNotOk } from './isNotOk'

export const test: Test = describe(`isNotOk`, [
  given(`given false`, [
    it(`returns false`, ({ same }) => {
      const value = isNotOk(false)

      same(value, false)
    }),

    it(`throws an Error`, ({ same }) => {
      try {
        isNotOk(true)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Value was expected to be false`)
      }
    }),
  ]),
])
