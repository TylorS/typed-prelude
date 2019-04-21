import { describe, given, it, Test } from '@typed/test'

import { fromJust } from './fromJust'
import { isJust } from './isJust'
import { isNothing } from './isNothing'
import { Maybe } from './Maybe'

export const test: Test = describe(`Maybe.of`, [
  given(`void`, [
    it(`returns Nothing`, ({ ok }) => {
      const value = void 0
      const maybe = Maybe.of<number>(value)

      ok(isNothing(maybe))
    }),
  ]),

  given(`null`, [
    it(`returns Nothing`, ({ ok }) => {
      const value = null
      const maybe = Maybe.of(value)

      ok(isNothing(maybe))
    }),
  ]),

  given(`a falsy value`, [
    it(`returns a Just containing the value`, ({ equal }) => {
      const value = 0
      const maybe = Maybe.of<number>(value)

      if (isJust(maybe)) {
        equal(value, fromJust(maybe))
      }
    }),
  ]),
])
