import { describe, given, it } from '@typed/test'
import { createHooksContext } from './createHooksContext'
import { defaultTimer, setCurrentContext } from './manager'

export const test = describe(`createHooksContext`, [
  given(`a Function`, [
    it(`returns a hooks context for that function`, ({ equal, ok }) => {
      const that = {}
      const args = [1, 2, 3]
      let called = 0
      function test(this: any, ...input: typeof args) {
        called++
        equal(that, this)
        equal(args, input)
      }

      const context = createHooksContext(test)
      const { dispose } = setCurrentContext(context, that, args)

      equal(0, called)
      ok(context.state.shouldRerunHooks)
      ok(context.state.hasBeenUpdated)
      equal(context.state.fn, test)
      equal(context.state.fnContext, that)
      equal(context.state.fnArguments, args)
      equal(context.timer, defaultTimer)
      equal(0, context.nextId())
      equal(1, context.nextId())

      context.update()

      equal(1, called)

      dispose()

      equal(0, context.nextId())
    }),
  ]),
])
