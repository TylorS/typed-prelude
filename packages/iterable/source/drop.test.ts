import { describe, given, it } from '@typed/test'
import { drop } from './drop'
import { range } from './range'

export const test = describe(`async/drop`, [
  given(`an amount and an async iterable `, [
    it(`drops 'n' number of first values`, async ({ equal }) => {
      const n = 2
      const i = range(1, 5)
      const sut = drop(n, i)
      const expected = [3, 4, 5]

      equal(expected, Array.from(sut))
    }),
  ]),
])
