import { describe, given, it } from '@typed/test'
import { MockReadable } from './MockReadable'

export const test = describe(`MockReadable`, [
  given(`ReadableOptions?`, [
    it(`returns inspectable Readable stream that can be imperatively written to`, ({ equal }) => {
      const expected = [1, 2, 3].map(String)
      const readable = new MockReadable()

      readable.write(...expected)

      equal(expected, readable.data())
    }),
  ]),
])
