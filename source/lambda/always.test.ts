import { describe, given, it, Test } from '@typed/test'
import { always } from './always'

export const test: Test = describe('always', [
  given('A value', [
    it('returns a function that always returns that value', ({ equal }) => {
      const firstValue = 1
      const secondValue = Symbol()
      const f = always(firstValue)
      const g = always(secondValue)

      equal(firstValue, f())
      equal(firstValue, f())
      equal(secondValue, g())
      equal(secondValue, g())
    }),
  ]),
])
