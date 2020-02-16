import { Pure } from '@typed/env'
import { describe, given, it } from '@typed/test'
import { combine } from './combine'
import { Effect } from './Effect'
import { runEffects } from './runEffects'

export const test = describe(`combine`, [
  given(`a number of effects`, [
    it(`returns an array of all their return values`, ({ equal }) => {
      const values = [0, 1, 2, 3]

      function* sut() {
        equal(values, yield* combine(...values.map(value => Effect.fromEnv(Pure.of(value)))))
      }

      runEffects(sut(), {})
    }),
  ]),
])
