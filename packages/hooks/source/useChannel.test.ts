import { co, runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { NodeGenerator } from '@typed/uuid'
import { createChannel } from './createChannel'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManager } from './createHooksManager'
import { InitialState } from './HookEnvironment'

export const test = describe(`useChannel`, [
  given(`a Channel`, [
    it(`can receive a value within a channel`, ({ equal }) => {
      const manager = createHooksManager(new NodeGenerator())
      const hooksEnvA = [createHookEnvironment(manager), 1] as const
      const hooksEnvB = [createHookEnvironment(manager), 2] as const
      const hooksEnvC = [createHookEnvironment(manager), 3] as const
      const hooksEnvs = [hooksEnvA, hooksEnvB, hooksEnvC]
      const channel = createChannel(InitialState.of(0))

      function* test() {
        for (const [env, value] of hooksEnvs) {
          const [getValue, provide] = yield* env.useChannel(channel)

          equal(value, yield* provide(() => value))
          equal(value, yield* getValue())
        }
      }

      runEffects(co(test)(), {})
    }),
  ]),
])
