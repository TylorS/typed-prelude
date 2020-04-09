import { Disposable } from '@typed/disposable'
import { runPure } from '@typed/env'
import { describe, given, it } from '@typed/test'
import { runEffect } from './runEffect'

export const test = describe(`runEffect`, [
  given(`an Effect `, [
    it(`returns an Env`, ({ equal }, done) => {
      const add = function* (a: number, b: number) {
        return a + b
      }

      const pure = runEffect(add(1, 2))

      runPure((x) => {
        equal(3, x)
        done()

        return Disposable.None
      }, pure)
    }),
  ]),
])
