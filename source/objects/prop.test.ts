import { describe, given, it, Test } from '@typed/test'

import { Maybe } from '@typed/maybe'
import { prop } from './prop'

export const test: Test = describe(`prop`, [
  given(`K => { K: V }`, [
    it(`returns V`, ({ equal }) => {
      equal(Maybe.of(1), prop('a', { a: 1 }))
      equal(Maybe.of(1), prop('a')({ a: 1 }))
    }),
  ]),
])
