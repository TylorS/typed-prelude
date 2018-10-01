import { describe, given, it, Test } from '@typed/test'
import { join } from '.'

export const test: Test = describe(`join`, [
  given(`a separator and a list of values`, [
    it(`returns a string of the values joined by the separator`, ({ equal }) => {
      const separator = '-!-'
      const values = [{ a: '1' }, { b: '2' }, { c: '3' }]
      const expected = `{"a": "1"}-!-{"b": "2"}-!-{"c": "3"}`

      equal(expected, join(separator, values))
    }),
  ]),
])
