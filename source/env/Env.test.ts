import { describe, given, it } from '@typed/test'
import { Env, runPure } from './Env'

export const test = describe(`Env`, [
  describe(`of`, [
    given(`a value`, [
      it(`returns a function which takes a callback for the value`, ({ same }) => {
        const value = {}
        const isEqual = same(value)
        const pure = Env.of(value)

        runPure(isEqual, pure)
      }),
    ]),
  ]),
])
