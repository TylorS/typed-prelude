import { describe, given, it } from '@typed/test'
import { createVirtualClock } from './createVirtualClock'

export const test = describe(`createVirtualClock`, [
  describe(`currentTime`, [
    it(`returns 0 by default`, ({ equal }) => {
      const clock = createVirtualClock()

      equal(0, clock.currentTime())
    }),

    given(`a starting time`, [
      it(`returns starting time by default`, ({ equal }) => {
        const time = 5
        const clock = createVirtualClock(time)

        equal(time, clock.currentTime())
      }),
    ]),
  ]),

  describe(`timePast`, [
    given(`a delay`, [
      it(`causes currentTime to move forward by delay`, ({ equal }) => {
        const delay = 100
        const clock = createVirtualClock()

        clock.progressTimeBy(delay)

        equal(delay, clock.currentTime())
      }),
    ]),
  ]),
])
