import { describe, given, it, Test } from '@typed/test'
import { Maybe, Nothing, withDefault } from '.'

export const test: Test = describe(`withDefault`, [
  given(`a default value and Nothing`, [
    it(`returns default value`, ({ equal }) => {
      const defaultValue = {}
      const maybe = Nothing

      equal(defaultValue, withDefault(defaultValue, maybe))
    }),
  ]),

  given(`a default value and Just a`, [
    it(`returns Just contained value`, ({ equal }) => {
      const defaultValue = -1
      const value = 1
      const maybe = Maybe.of(value)

      equal(value, withDefault(defaultValue, maybe))
    }),
  ]),
])
