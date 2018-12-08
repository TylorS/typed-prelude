import { describe, given, it, Test } from '../test'
import { chain } from './chain'
import { defaultResources, Effect } from './Effect'

export const test: Test = describe(`Effect.chain`, [
  given(`(a -> Effect b) -> Effect a`, [
    it(`returns Effect b`, ({ equal }, done) => {
      const effA = Effect.of(1)
      const f = (value: number) => Effect.of(value + 1)
      const expectedValue = 2

      function assert(actual: number) {
        equal(expectedValue, actual)

        done()
      }

      const { runEffect } = chain(f, effA)

      runEffect(assert, defaultResources())
    }),
  ]),
])
