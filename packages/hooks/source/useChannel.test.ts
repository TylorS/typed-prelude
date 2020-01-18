import { runEffect, runEffects } from '@typed/effects'
import { handle } from '@typed/env'
import { describe, given, it } from '@typed/test'
import { createChannel } from './createChannel'
import { createHooksEnvironment } from './createHooksEnvironment'
import { createHooksManager } from './createHooksManager'
import { useChannel } from './useChannel'

export const test = describe(`useChannel`, [
  given(`a Channel`, [
    it(`can receive a value within a channel`, ({ equal }) => {
      const manager = createHooksManager()
      const hooksEnvA = [createHooksEnvironment(manager), 1] as const
      const hooksEnvB = [createHooksEnvironment(manager), 2] as const
      const hooksEnvC = [createHooksEnvironment(manager), 3] as const
      const hooksEnvs = [hooksEnvA, hooksEnvB, hooksEnvC]
      const channel = createChannel(0)

      function* test() {
        for (const [env, value] of hooksEnvs) {
          const provide = yield* env.provideChannel(channel, value)

          equal(value, yield* provide(value))
          equal(value, yield handle(env, runEffect(useChannel(channel))))
        }
      }

      runEffects(test(), {})
    }),
  ]),
])
