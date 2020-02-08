import { runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import { NodeGenerator } from '@typed/uuid'
import { createChannel } from './createChannel'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManager } from './createHooksManager'

export const test = describe(`createHooksManager`, [
  given(`a hierarchy of HookEnvironments`, [
    it(`updates descendant channel consumers of updates when ancenstors are updated`, ({
      equal,
      notOk,
      ok,
    }, done) => {
      const manager = createHooksManager(new NodeGenerator())
      const a = createHookEnvironment(manager)
      const b = createHookEnvironment(manager)
      const c = createHookEnvironment(manager)
      const initial = 1
      const expected = 3
      const channel = createChannel(initial)

      function* test() {
        try {
          // Add hierarchy
          yield* manager.setParent(b, a)
          yield* manager.setChild(b, c)

          // Check that things are initial
          equal(initial, yield* manager.consumeChannel(channel, a))
          equal(initial, yield* manager.consumeChannel(channel, b))
          equal(initial, yield* manager.consumeChannel(channel, c))

          // Shouldn't be marked updated yet
          notOk(a.updated)
          notOk(b.updated)
          notOk(c.updated)

          // Get provideChannel Effect from manager
          const provideChannel = yield* manager.updateChannel(channel, initial, a)

          // Ensure manager.updateChannel didn't make any unexpected changes
          equal(initial, yield* manager.consumeChannel(channel, a))
          equal(initial, yield* manager.consumeChannel(channel, b))
          equal(initial, yield* manager.consumeChannel(channel, c))
          notOk(a.updated)
          notOk(b.updated)
          notOk(c.updated)

          // Provide new value
          equal(expected, yield* provideChannel(expected))

          // Check that value was updated
          equal(expected, yield* manager.consumeChannel(channel, a))
          equal(expected, yield* manager.consumeChannel(channel, b))
          equal(expected, yield* manager.consumeChannel(channel, c))

          // Ensure HookEnvironments are marked updated
          ok(a.updated)
          ok(b.updated)
          ok(c.updated)

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(test(), {})
    }),
  ]),
])
