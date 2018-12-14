import { describe, given, it, Test } from '@typed/test'

import { startsWith } from './startsWith'

export const test: Test = describe(`endsWith`, [
  given(`an search string and a string starting in search`, [
    it(`returns true`, ({ ok }) => {
      const search = 'he'

      ok(startsWith(search, ['h', 'e', 'l', 'l', 'o']))
    }),
  ]),

  given(`an search string and a string not starting in search`, [
    it(`returns false`, ({ notOk }) => {
      const search = 'no'

      notOk(startsWith(search, ['h', 'e', 'l', 'l', 'o']))
    }),
  ]),
])
