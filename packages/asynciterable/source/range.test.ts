import { describe, given, it } from '@typed/test'
import { collect } from './collect'
import { rangeBy } from './range'

export const test = describe(`async/rangeBy`, [
  given(`from, to, and increments`, [
    it(`returns an AsyncIterable`, async ({ equal }) => {
      const sut = rangeBy(2, 20, 2)
      const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

      equal(expected, await collect(sut))
    }),
  ]),
])
