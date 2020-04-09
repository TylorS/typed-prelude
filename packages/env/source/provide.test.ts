import { Disposable } from '@typed/disposable'
import { id } from '@typed/lambda'
import { describe, given, it } from '@typed/test'
import { provide } from './provide'
import { runEnv } from './runEnv'
import { withEnv } from './withEnv'

export const test = describe(`provide`, [
  given(`some default resourdes and an Env`, [
    it(`returns Env without need for those resources`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const partial = { a: 1 }
      const env = withEnv<typeof expected, typeof expected>(id)
      const handled = provide(env, partial)

      runEnv((actual) => (equal(expected, actual), Disposable.None), { b: 2 }, handled)
    }),
  ]),
])
