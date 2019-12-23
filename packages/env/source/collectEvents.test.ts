import { Disposable } from '@typed/disposable'
import { describe, given, it } from '@typed/test'
import { collectEvents } from './collectEvents'
import { Pure } from './Env'

export const test = describe(`collectEvents`, [
  given(`a Pure`, [
    it(`collects its value in a promise`, async ({ equal }) => {
      const value = {}
      const pure = Pure.of(value)

      const events = await collectEvents(pure)

      equal([value], events)
    }),
  ]),

  given(`a Pure and number of events`, [
    it(`collects its value in a promise`, async ({ equal }) => {
      const value = {}
      const pure: Pure<typeof value> = {
        type: 'lazy',
        runEnv: f => {
          f(value)
          f(value)

          return Disposable.None
        },
      }

      const events = await collectEvents(pure, 2)

      equal([value, value], events)
    }),
  ]),
])
