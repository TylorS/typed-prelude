import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import {
  createHooksManagerEnv,
  createHookEnvironment,
  HookEnvironmentEventType,
} from '@typed/hooks'
import { NodeGenerator } from '@typed/uuid'
import { useListManager } from './useListManager'
import { runEffects } from '@typed/effects'
import { Disposable } from '@typed/disposable'

export const test = describe(`useListManager`, [
  given(`a List of Values, a fn used to identify each value, and an hook effect`, [
    it(`provides an individual hook environment for each effect`, ({ equal }) => {
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const list = Array(100)
        .fill(null)
        .map((_, i) => i)

      let created = 0

      hooksManagerEnv.hooksManager.hookEvents.subscribe(event => {
        if (event[0] === HookEnvironmentEventType.Created) {
          created++
        }

        return Disposable.None
      })

      function* sut() {
        yield* useListManager(list, String, function* component(value, index, key) {
          equal(key[String(value)], value)
          equal(value, index)

          if (index === list.length) {
            equal(list.length - 1, created)
          }
        })
      }

      runEffects(sut(), {
        ...hooksManagerEnv,
        timer,
        hookEnvironment: rootHookEnvironment,
      })

      timer.progressTimeBy(1)
    }),
  ]),
])
