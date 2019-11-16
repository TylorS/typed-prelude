import { describe, given, it } from '@typed/test'
import { zip } from './zip'

describe('zip', [
  given('[a] -> [b]', [
    it('-> [ (a, b) ]', ({ equal }) => {
      equal(zip([1, 2, 3], ['a', 'b', 'c']), [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])

      equal(zip([1, 2, 3, 4], ['a', 'b', 'c']), [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])

      equal(zip([1, 2, 3], ['a', 'b', 'c', 'd']), [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ])
    }),
  ]),
])
