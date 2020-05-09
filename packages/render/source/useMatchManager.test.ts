import { Effect, runEffects } from '@typed/effects'
import { createHookEnvironment, createHooksManagerEnv, useRef } from '@typed/hooks'
import { equals, Match } from '@typed/logic'
import { Just, withDefault } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { PatchEnv } from './Patch'
import { useMatchManager } from './useMatchManager'

export const test = describe(`useMatchManager`, [
  given(`a list of Matches to computations`, [
    it(`provides an isolated environment for each match`, ({ equal }) => {
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const routeA = Match.fromPredicate(equals('a'))
      const routeB = Match.fromPredicate(equals('b'))
      const patch: PatchEnv<string, number> = {
        patch: (previous, current) => Effect.of(previous + current),
      }

      function* increment() {
        const [ref, set] = yield* useRef<unknown, number>()
        const current = withDefault(0, ref.current)

        set(current + 1)

        // timer.progressTimeBy(1)

        return current
      }

      const matches = [
        Match.map((_) => increment, routeA),
        Match.map((_) => increment, routeB),
      ] as const

      function* test() {
        let value = yield* useMatchManager('a', matches, 'z')

        equal(Just.of(0), value)

        value = yield* useMatchManager('a', matches, 'z')

        equal(Just.of(1), value)

        value = yield* useMatchManager('b', matches, 'z')

        equal(Just.of(0), value)

        value = yield* useMatchManager('b', matches, 'z')

        equal(Just.of(1), value)

        value = yield* useMatchManager('a', matches, 'z')

        equal(Just.of(2), value)

        value = yield* useMatchManager('b', matches, 'z')

        equal(Just.of(2), value)
      }

      runEffects(test(), {
        ...patch,
        ...hooksManagerEnv,
        hookEnvironment: rootHookEnvironment,
        timer,
      })

      // Give the useEffect*s time to run
      timer.progressTimeBy(1)
    }),
  ]),
])
