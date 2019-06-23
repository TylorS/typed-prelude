import { describe, given, it } from '@typed/test'
import { rangeBy } from './range'

export const test = describe(`async/rangeBy`, [
  given(`from, to, and increments`, [
    it(`returns an Iterable`, async ({ equal }) => {
      const sut = rangeBy(2, 20, 2)
      const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

      equal(expected, Array.from(sut))
    }),
  ]),
])
