import { describe, given, it } from '@typed/test'
import { createRelativeClock } from './clock'
import { Clock } from './types'

export const test = describe(`clock`, [
  describe(`clockRelativeTo`, [
    given(`a Clock and an origin`, [
      it(`returns current time subtracted by origin`, ({ equal }) => {
        const times = [3, 5]
        const clock: Clock = { currentTime: () => times.shift() as number }
        const expected = 2
        const relativeClock = createRelativeClock(clock)

        equal(expected, relativeClock.currentTime())
      }),
    ]),
  ]),
])
