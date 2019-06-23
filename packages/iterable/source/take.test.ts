import { describe, given, it } from '@typed/test'
import { range } from './range'
import { take } from './take'

export const test = describe(`async/take`, [
  given(`an amount and an async iterable `, [
    it(`takes 'n' number of first values`, async ({ equal }) => {
      const n = 2
      const i = range(1, 5)
      const sut = take(n, i)
      const expected = [1, 2]

      equal(expected, Array.from(sut))
    }),
  ]),
])
