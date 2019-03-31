import { describe, given, it } from '@typed/test'
import { Env } from './Env'
import { handle } from './handle'

export const test = describe(`handle`, [
  given(`some default resourdes and an Env`, [
    it(`returns Env without need for those resources`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const partial = { a: 1 }
      const env: Env<typeof expected, typeof expected> = {
        runEnv: (f, r) => f(r),
      }
      const { runEnv } = handle(partial, env)

      runEnv(equal(expected), { b: 2 })
    }),
  ]),
])
