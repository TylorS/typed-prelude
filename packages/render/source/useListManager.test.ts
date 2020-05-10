import { Disposable } from '@typed/disposable'
import { Effect, runEffects } from '@typed/effects'
import {
  createHookEnvironment,
  createHooksManagerEnv,
  HookEnvironmentEventType,
  Ref,
} from '@typed/hooks'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { PatchEnv } from './Patch'
import { useListManager } from './useListManager'

export const test = describe(`useListManager`, [
  given(`a List of Values, a fn used to identify each value, and an hook effect`, [
    it(`provides an individual hook environment for each effect`, ({ equal }) => {
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const patch: PatchEnv<number, number> = {
        patch: (previous, current) => Effect.of(previous + current),
      }
      const list = Array(100)
        .fill(null)
        .map((_, i) => i)

      let created = 0

      hooksManagerEnv.hooksManager.hookEvents.subscribe((event) => {
        if (event[0] === HookEnvironmentEventType.Created) {
          created++

          equal(rootHookEnvironment.id, event[1].parent.id)
        }

        return Disposable.None
      })

      function* sut() {
        yield* useListManager(
          list,
          (n) => String(n),
          function* component(_, __, value) {
            return value
          },
        )
      }

      runEffects(sut(), {
        ...hooksManagerEnv,
        timer,
        hookEnvironment: rootHookEnvironment,
        ...patch,
      })

      timer.progressTimeBy(1)

      equal(list.length, created)
    }),
  ]),
])
