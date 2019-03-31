import { describe, given, it } from '@typed/test'
import { Env } from './Env'

export const test = describe(`Env`, [
  describe(`of`, [
    given(`a value`, [
      it(`returns a function which takes a callback for the value`, ({ same }) => {
        const value = {}
        const isEqual = same(value)
        const { runEnv } = Env.of(value)

        runEnv(isEqual)
      }),
    ]),
  ]),
])
