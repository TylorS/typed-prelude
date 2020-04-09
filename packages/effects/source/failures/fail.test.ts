import { describe, given, it } from '@typed/test'
import { get } from '../factories'
import { runEffects } from '../run'
import { catchFailure, fail } from './fail'

export const test = describe(`handleFailure`, [
  given(`an effect that might throw an error`, [
    it(`allows capturing the error`, ({ equal, same }) => {
      const error = new Error(`Wtf`)
      const errorType = 'failure' as const
      const fallback = 7

      function* throws() {
        yield* get<{ b: string }>()

        yield* fail(errorType, error)
      }

      function* levelOfIndirection() {
        yield* get<{ a: number }>()

        yield* throws()

        return NaN
      }

      function* sut() {
        const actual = yield* catchFailure(levelOfIndirection(), errorType, (err) => {
          same(error, err)

          return fallback
        })

        equal(fallback, actual)
      }

      runEffects(sut(), { a: 1, b: 'asdf' })
    }),
  ]),
])
