import { runEffects } from '@typed/effects'
import { Resume } from '@typed/env'
import {
  createHookEnvironment,
  createHooksManager,
  InitialState,
  useEffectOnce,
  useState,
  withHooks,
} from '@typed/hooks'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer, interval } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { createTestRafEnv } from './createTestRafEnv'
import { renderOnRaf } from './renderOnRaf'

export const test = describe(`renderOnRaf`, [
  given(`a function to HookEffects<A, B>`, [
    it(`returns an effect that renders type B on RAF updates`, ({ equal }, done) => {
      const timer = createVirtualTimer()
      const manager = createHooksManager(new NodeGenerator())
      const hookEnvironment = createHookEnvironment(manager)
      const i = 1000
      const app = withHooks(function*() {
        const [getState, updateState] = yield* useState(InitialState.of<number>(1))

        yield* useEffectOnce(() =>
          interval(
            () =>
              runEffects(
                updateState(x => x + 1),
                {},
              ),
            i,
            timer,
          ),
        )

        return yield* getState()
      })

      const expectedValues = [1, 2, 3]

      const e = {
        hookEnvironment,
        ...createTestRafEnv(timer),
        render: (value: number) => {
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

      runEffects(renderOnRaf(app), e)

      setTimeout(() => {
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
        timer.progressTimeBy(i)
      })
    }),
  ]),
])
