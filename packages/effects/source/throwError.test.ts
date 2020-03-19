import { describe, given, it } from '@typed/test'
import { Capabilities, Yield } from './Effect'
import { get } from './get'
import { runEffects } from './runEffects'
import { fail, handleError } from './throwError'

export const test = describe(`handleError`, [
  given(`an effect that might throw an error`, [
    it(`allows capturing the error`, ({ equal }) => {
      const error = new Error(`Wtf`)
      const fallback = 7

      function* throws() {
        yield* fail(error)
      }

      function* levelOfIndirection() {
        yield* get<{ a: number }>()

        yield* throws()

        return NaN
      }

      function* sut() {
        const actual = yield* handleError(levelOfIndirection(), () => fallback)

        equal(fallback, actual)
      }

      runEffects(sut(), { a: 1 })
    }),
  ]),
])
