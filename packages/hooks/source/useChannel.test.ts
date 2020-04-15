import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { NodeGenerator } from '@typed/uuid'
import { createChannel } from './createChannel'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManagerEnv } from './createHooksManagerEnv'
import { InitialState } from './types'

export const test = describe(`useChannel`, [
  given(`a Channel`, [
    it(`can receive a value within a channel`, ({ equal }) => {
      const HooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const hooksEnvA = [createHookEnvironment(HooksManagerEnv.hooksManager), 1] as const
      const hooksEnvB = [createHookEnvironment(HooksManagerEnv.hooksManager), 2] as const
      const hooksEnvC = [createHookEnvironment(HooksManagerEnv.hooksManager), 3] as const
      const hooksEnvs = [hooksEnvA, hooksEnvB, hooksEnvC]
      const channel = createChannel(InitialState.of(0))

      function* test() {
        for (const [env, value] of hooksEnvs) {
          const [getValue, provide] = yield* HooksManagerEnv.hooksManager.useChannelState(
            { channel, initialState: channel.defaultValue },
            env,
          )

          equal(value, yield* provide(() => value))
          equal(value, yield* getValue())
        }
      }

      runEffects(test(), { ...HooksManagerEnv })
    }),
  ]),
])
