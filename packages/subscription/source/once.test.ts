import { describe, given, it } from '@typed/test'
import { once } from './once'
import { createSubscription } from './Subscription'

export const test = describe(`once`, [
  given(`a Subscription`, [
    it(`returns a promise for next published value`, async ({ same }) => {
      const expected = { x: 1 }
      const sub = createSubscription<typeof expected>()

      const randomDelay = Math.random() * 100 + 10
      setTimeout(sub.publish, randomDelay, expected)

      const actual = await once(sub)

      same(expected, actual)
    }),
  ]),
])
