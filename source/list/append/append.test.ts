import { describe, given, it, Test } from '@typed/test'

import { append } from './append'

export const test: Test = describe(`append`, [
  given(`a -> [a]`, [
    it(`returns [a]`, ({ equal }) => {
      const value = 4
      const list = [1, 2, 3]
      const expected = [...list, value]

      equal(expected, append(value, list))
    }),
  ]),
])
