import { describe, given, it } from '@typed/test'
import { addIndentation } from './addIndentation'

export const test = describe(`addIndentation`, [
  given(`a string and a depth`, [
    it(`returns all new lines indented by that depth`, ({ equal }) => {
      const str = 'foo/nbar/baz'
      const expected2 = 'foo/n  bar/n  baz'
      const expected4 = 'foo/n    bar/n    baz'

      equal(expected2, addIndentation(str, 2))
      equal(expected4, addIndentation(str, 4))
    }),
  ]),
])
