import { id } from '@typed/lambda'
import { describe, given, it } from '@typed/test'
import { LazyEnv } from './Env'
import { handle } from './handle'
import { withEnv } from './withEnv'

export const test = describe(`handle`, [
  given(`some default resourdes and an Env`, [
    it(`returns Env without need for those resources`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const partial = { a: 1 }
      const env = withEnv<typeof expected, typeof expected>(id)
      const { runEnv } = handle(partial, env) as LazyEnv<{ b: number }, typeof expected>

      runEnv(equal(expected), { b: 2 })
    }),
  ]),
])
