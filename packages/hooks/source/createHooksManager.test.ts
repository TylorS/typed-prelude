import { Effect, runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { NodeGenerator } from '@typed/uuid'
import { createChannel } from './createChannel'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManagerEnv } from './createHooksManagerEnv'
import { HookEnvironment, HookEnvironmentEventType } from './types'

export const test = describe(`createHooksManager`, [
  given(`a hierarchy of HookEnvironments`, [
    it(`updates descendant channel consumers of updates when ancestors are updated`, ({
      equal,
      notOk,
      ok,
    }, done) => {
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const a = createHookEnvironment(hooksManagerEnv.hooksManager)
      const b = createHookEnvironment(hooksManagerEnv.hooksManager)
      const c = createHookEnvironment(hooksManagerEnv.hooksManager)
      const initial = 1
      const expected = 3
      const channel = createChannel(() => Effect.of(initial))

      function* consumeFrom(node: HookEnvironment) {
        const [getValue] = yield* hooksManagerEnv.hooksManager.useChannelState({ channel }, node)

        return yield* getValue()
      }

      function* test() {
        try {
          // Add hierarchy
          hooksManagerEnv.hooksManager.hookEvents.publish([
            HookEnvironmentEventType.Created,
            { created: b, parent: a },
          ])
          hooksManagerEnv.hooksManager.hookEvents.publish([
            HookEnvironmentEventType.Created,
            { created: c, parent: b },
          ])

          // Check that things are initial
          equal(initial, yield* consumeFrom(a))
          equal(initial, yield* consumeFrom(b))
          equal(initial, yield* consumeFrom(c))

          // Shouldn't be marked updated yet
          notOk(a.updated)
          notOk(b.updated)
          notOk(c.updated)

          // Get provideChannel Effect from manager
          const [, provideChannel] = yield* hooksManagerEnv.hooksManager.useChannelState(
            { channel, initialState: channel.defaultValue },
            a,
          )

          // Provide new value
          equal(expected, yield* provideChannel(() => expected))

          // Ensure HookEnvironments are marked updated
          ok(a.updated)
          ok(b.updated)
          ok(c.updated)

          // Check that value was updated
          equal(expected, yield* consumeFrom(a))
          equal(expected, yield* consumeFrom(b))
          equal(expected, yield* consumeFrom(c))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(test(), {
        ...hooksManagerEnv,
      })
    }),
  ]),
])
