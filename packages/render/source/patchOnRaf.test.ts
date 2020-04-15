import { runEffects } from '@typed/effects'
import { Resume } from '@typed/env'
import {
  createHookEnvironment,
  createHooksManagerEnv,
  InitialState,
  useEffectOnce,
  useState,
} from '@typed/hooks'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer, interval } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { createTestRafEnv } from './createTestRafEnv'
import { patchOnRaf } from './patchOnRaf'

export const test = describe(`patchOnRaf`, [
  given(`a function to HookEffects<A, B>`, [
    it(`returns an effect that renders type B on RAF updates`, ({ equal }, done) => {
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const hookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const i = 1000
      function* app() {
        const [getState, updateState] = yield* useState(InitialState.of<number>(1))

        yield* useEffectOnce(() =>
          interval(
            () =>
              runEffects(
                updateState((x) => x + 1),
                {},
              ),
            i,
            timer,
          ),
        )

        return yield* getState()
      }

      const expectedValues = [1, 2, 3]

      const e = {
        timer,
        ...hooksManagerEnv,
        hookEnvironment,
        ...createTestRafEnv(timer),
        patch: (_: number, value: number) => {
          const expected = expectedValues.shift()

          try {
            if (expected) {
              equal(expected, value)
            } else {
              done()
            }
          } catch (error) {
            done(error)
          }

          return Resume.of(value)
        },
      } as const

      runEffects(patchOnRaf(app, 0), e)
      timer.progressTimeBy(i)

      setTimeout(() => {
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
      })
    }),
  ]),
])
