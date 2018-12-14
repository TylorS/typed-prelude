import { describe, given, it, Test } from '@typed/test'
import { chain, defaultResources, Effect } from '../effect'
import { increment } from '../math'
import { createStore } from './Store'

export const test: Test = describe(`createStore `, [
  given(`Default State and Resources`, [
    it(`returns a Store`, ({ equal }, done) => {
      const resources = defaultResources()
      const { update, redo, undo, listen, reset } = createStore(0, {
        maxRedoSize: 1,
        maxUndoSize: 2,
      })
      const incrementState = update(Effect.of(increment))

      const { runEffect } = [
        incrementState,
        incrementState,
        undo,
        undo,
        undo,
        redo,
        redo,
        reset,
      ].reduce((x, y) => chain(() => y, x), incrementState)

      const expectedValues = [1, 2, 3, 2, 1, 1, 2, 2, 0]
      const listener = (value: number) => {
        const expected = expectedValues.shift()
        try {
          equal(expected, value)
        } catch (e) {
          done(e)
        }

        if (expectedValues.length === 0) {
          done()
        }
      }

      const disposable = listen(listener)

      runEffect(() => disposable.dispose(), resources)
    }),
  ]),
])
