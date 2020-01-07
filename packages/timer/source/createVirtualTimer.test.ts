import { Disposable } from '@typed/disposable'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from './createVirtualTimer'

export const test = describe(`createVirtualTimer`, [
  describe(`timePast`, [
    given(`a delay`, [
      it(`runs all tasks in time frame`, ({ equal }) => {
        const timer = createVirtualTimer()

        const expectedValues = [1, 2, 3]

        function callback(value: number) {
          const expected = expectedValues.shift()

          equal(expected, value)

          return Disposable.None
        }

        timer.delay(() => callback(1), 50)
        timer.delay(() => callback(2), 100)
        timer.delay(() => callback(3), 200)

        timer.progressTimeBy(100)

        equal(1, expectedValues.length)

        timer.progressTimeBy(100)

        equal(0, expectedValues.length)
      }),
    ]),
  ]),
])
