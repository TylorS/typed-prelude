import { Disposable } from '@typed/disposable'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from './createVirtualTimer'
import { interval } from './interval'

export const test = describe(`interval`, [
  given(`a callback, an interval, and Timer`, [
    it(`calls callback at interval`, ({ equal }) => {
      const delay = 50
      const expected = [delay, delay * 2, delay * 3]
      function test(value: number) {
        equal(expected.shift(), value)

        return Disposable.None
      }
      const timer = createVirtualTimer()
      const disposable = interval(test, delay, timer)

      timer.progressTimeBy(delay)
      timer.progressTimeBy(delay)
      timer.progressTimeBy(delay)

      equal(0, expected.length)

      disposable.dispose()
    }),
  ]),
])
