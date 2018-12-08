import { describe, given, it, Test } from '../test'
import { toString } from './toString'

export const test: Test = describe(`toString`, [
  given(`an object`, [
    it(`is converted to a string`, ({ equal }) => {
      const obj = {
        a: {
          b: 2,
          c: {
            d: 3,
          },
        },
      }
      const expected = `{"a": {"b": 2, "c": {"d": 3}}}`

      equal(expected, toString(obj))
    }),
  ]),

  given('an array', [
    it(`is converted to a string`, ({ equal }) => {
      const array = [1, 2, 3]
      const expected = `[1, 2, 3]`

      equal(expected, toString(array))
    }),
  ]),

  given('a string', [
    it(`is returned quoted`, ({ equal }) => {
      const str = `hello`
      const expected = `"hello"`

      equal(expected, toString(str))
    }),
  ]),

  given('a number', [
    it(`is returned as a string`, ({ equal }) => {
      const num = 4
      const expected = '4'

      equal(expected, toString(num))
    }),
  ]),

  given('a boolean', [
    it('is returned as a string', ({ equal }) => {
      equal('true', toString(true))
      equal('false', toString(false))
    }),
  ]),
])
