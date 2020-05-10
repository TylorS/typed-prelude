import { runEffects } from '@typed/effects'
import { memoize } from '@typed/lambda'
import { describe, given, it } from '@typed/test'
import { interval } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { increment } from '../../math/source'
import { getEnvironmentByKey, runWithHooks, useEffectBy, useEffectOnce, useTimer } from './'
import { createTestHookEnvironment } from './createTestHookEnvironment'
import { InitialState } from './types'
import { useState } from './useState'

export const test = describe(`useEffectBy`, [
  given(`a list, a function to a reusable key, and a hook computation`, [
    it(`returns the values of the hook computation applied to a diff of the list`, ({
      equal,
    }, done) => {
      const i = 1000
      const getKey = memoize((key: number) => ({ key }))
      const testEnv = createTestHookEnvironment(new NodeGenerator())

      function* Counter(initial: number) {
        const [getCount, updateCount] = yield* useState(InitialState.of(initial))
        const timer = yield* useTimer()

        yield* useEffectOnce(() => interval(() => runEffects(updateCount(increment)), i, timer))

        return yield* getCount()
      }

      function* sut() {
        try {
          const env = yield* getEnvironmentByKey({ test: 'key' })
          let values = yield* runWithHooks(useEffectBy([], getKey, Counter), env)

          equal([], values)

          values = yield* runWithHooks(useEffectBy([1], getKey, Counter), env)

          // Allow interval to "start"
          testEnv.timer.progressTimeBy(1)

          equal([1], values)

          // Allow interval to tick once
          testEnv.timer.progressTimeBy(i)

          // Check to see that it keeps the state for '1' and creates a new environment for '3'
          values = yield* runWithHooks(useEffectBy([1, 3], getKey, Counter), env)

          equal([2, 3], values)

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), {
        ...testEnv,
      })
    }),
  ]),
])
