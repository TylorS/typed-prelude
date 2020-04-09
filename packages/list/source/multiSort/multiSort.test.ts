import { describe, given, it, Test } from '@typed/test'
import { multiSort } from './multiSort'

export const test: Test = describe(`multiSort`, [
  given(`a list of sorting functions and a list`, [
    it(`returns a sorted list`, ({ equal }) => {
      type ABC = { a: number; b: number; c: number }
      const values: ABC[] = [
        { a: 1, b: 3, c: 1 },
        { a: 1, b: 2, c: 1 },
        { a: 1, b: 1, c: 1 },
        { a: 1, b: 2, c: 2 },
        { a: 1, b: 3, c: 2 },
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 1, c: 2 },
        { a: 2, b: 2, c: 2 },
        { a: 2, b: 2, c: 1 },
        { a: 2, b: 3, c: 1 },
        { a: 2, b: 1, c: 1 },
        { a: 2, b: 3, c: 2 },
        { a: 2, b: 2, c: 3 },
        { a: 2, b: 1, c: 2 },
      ]
      const actual = multiSort([(x) => x.a, (x) => x.b, (x) => x.c], values)
      const expected: ABC[] = [
        { a: 1, b: 1, c: 1 },
        { a: 1, b: 1, c: 2 },
        { a: 1, b: 2, c: 1 },
        { a: 1, b: 2, c: 2 },
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 3, c: 1 },
        { a: 1, b: 3, c: 2 },
        { a: 2, b: 1, c: 1 },
        { a: 2, b: 1, c: 2 },
        { a: 2, b: 2, c: 1 },
        { a: 2, b: 2, c: 2 },
        { a: 2, b: 2, c: 3 },
        { a: 2, b: 3, c: 1 },
        { a: 2, b: 3, c: 2 },
      ]

      equal(expected, actual)
    }),
  ]),
])
