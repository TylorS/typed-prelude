import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { createDefaultHooks } from './hooks'
import { createManager } from './manager'

const { withHooks, createHook } = createManager()
const { useEffect } = createDefaultHooks(createHook)

export const test = describe(`useEffect`, [
  given(`() => Disposable`, [
    it(`executes the function and cleans up using disposable`, ({ equal }) => {
      let called = 0
      const delayMs = 1
      const timer = createVirtualTimer()
      const fn = withHooks(() =>
        useEffect(
          () => ({
            dispose: () => {
              called++
            },
          }),
          { timer, delayMs },
        ),
      )

      fn().dispose()
      equal(0, called)

      const disposable = fn()

      timer.progressTimeBy(delayMs)

      disposable.dispose()
      equal(1, called)
    }),
  ]),
])
