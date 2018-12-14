import { describe, given, it, Test } from '@typed/test'

import { throws } from './throws'

export const test: Test = describe(`throws`, [
  given(`a function that throws`, [
    it(`returns the error`, ({ same }) => {
      const err = throws(() => {
        throw new Error(`Foo`)
      })

      same(err.message, `Foo`)
    }),
  ]),

  given(`a function that does not throw`, [
    it(`throws an error`, ({ same }) => {
      try {
        throws(foo)
        throw new Error(`Function should not throw`)
      } catch (e) {
        same(e.message, `Expected 'foo' to throw`)
      }
    }),
  ]),
])

function foo() {
  return void 0
}
