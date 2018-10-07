import { describe, given, it, Test } from '@typed/test'
import { pathJoin } from './pathJoin'

export const test: Test = describe(`pathJoin`, [
  given(`a array of paths without deliminators`, [
    it(`joins the path parts with deliminators`, ({ equal }) => {
      const parts = ['a', 'b', 'c']
      const expected = '/a/b/c'
      const actual = pathJoin(parts)

      equal(expected, actual)
    }),
  ]),

  given(`a array of paths with many deliminators`, [
    it(`joins the path parts with only a single deliminator between each`, ({ equal }) => {
      const parts = ['//a//', '//b////', 'c//']
      const expected = '/a/b/c/'
      const actual = pathJoin(parts)

      equal(expected, actual)
    }),
  ]),
])
