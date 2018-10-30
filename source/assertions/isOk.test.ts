import { describe, given, it, Test } from '@typed/test'

import { isOk } from './isOk'

export const test: Test = describe(`isOk`, [
  given(`true`, [
    it(`return true`, ({ same }) => {
      same(true, isOk(true))
    }),
  ]),

  given(`false`, [
    it(`throws an Error`, ({ same }) => {
      try {
        isOk(false)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Value is not true`)
      }
    }),
  ]),
])
