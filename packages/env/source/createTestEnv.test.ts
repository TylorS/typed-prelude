import { describe, given, it } from '@typed/test'
import { createTestEnv } from './createTestEnv'
import { Pure } from './Env'

export const test = describe(`createTestEnv`, [
  describe(`recordEvents`, [
    given(`a Pure`, [
      it(`records events of Pure`, ({ same }) => {
        const value = 1
        const pure = Pure.of(value)
        const { recordEvents, getAllEvents, timer } = createTestEnv()

        recordEvents(pure)
        timer.timePast(1)

        const events = getAllEvents()

        same(1, events.length)
        same(value, events[0])
      }),
    ]),
  ]),
  describe(`getAllEvents`, [
    it(`returns all events recorded by testEnv`, ({ equal }) => {
      const one = Pure.of(1)
      const two = Pure.of(2)
      const { recordEvents, getAllEvents, timer } = createTestEnv()

      recordEvents(one)
      recordEvents(two)
      timer.timePast(1)

      const events = getAllEvents()

      equal([1, 2], events)
    }),
  ]),
  describe(`getEvents`, [
    given(`a Pure`, [
      it(`returns all events recorded by a given Pure`, ({ equal }) => {
        const one = Pure.of(1)
        const two = Pure.of(2)
        const { recordEvents, getEvents, timer } = createTestEnv()

        recordEvents(one)
        recordEvents(two)
        timer.timePast(1)

        equal([1], getEvents(one))
        equal([2], getEvents(two))
      }),
    ]),
  ]),
])
