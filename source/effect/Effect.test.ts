import { newDefaultScheduler } from '@most/scheduler'
import { describe, given, it, Test } from '../test'
import { Effect } from './Effect'

export const test: Test = describe(`Effect`, [
  describe(`create`, [
    given(`(a -> number -> void) -> Scheduler -> Disposable`, [
      it(`-> Effect a`, ({ equal }, done) => {
        const expected = Symbol()

        const { runEffect } = Effect.create<typeof expected>((cb, { scheduler }) => {
          const id = setTimeout(() => cb(expected, scheduler.currentTime()))
          const dispose = () => clearTimeout(id)

          return { dispose }
        })

        const disposable = runEffect(assert, { scheduler: newDefaultScheduler() })

        function assert(actual: typeof expected) {
          equal(expected, actual)

          disposable.dispose()

          done()
        }
      }),
    ]),
  ]),

  describe(`of`, [
    given(`a`, [
      it(`-> Effect a`, ({ equal }, done) => {
        const expected = Symbol()
        const { runEffect } = Effect.of(expected)

        function assert(actual: typeof expected) {
          equal(expected, actual)

          done()
        }

        runEffect(assert, { scheduler: newDefaultScheduler() })
      }),
    ]),
  ]),
])
