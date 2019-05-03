import { describe, given, it, Test } from '@typed/test'
import { join } from '.'

export const test: Test = describe(`join`, [
  given(`a separator and a list of values`, [
    it(`returns a string of the values joined by the separator`, ({ equal }) => {
      const separator = '-!-'
      const values = [0, 1, 2]
      const expected = `0-!-1-!-2`

      equal(expected, join(separator, values))
    }),
  ]),
])
