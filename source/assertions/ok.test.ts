import { describe, given, it, Test } from '@typed/test'

import { ok } from './ok'

export const test: Test = describe(`ok`, [
  given(`true`, [
    it(`return true`, ({ same }) => {
      same(true, ok(true))
    }),
  ]),

  given(`false`, [
    it(`throws an Error`, ({ same }) => {
      try {
        ok(false)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Value is not true`)
      }
    }),
  ]),
])
