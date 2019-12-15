import { curry } from '@typed/lambda'
import { Env, Pure } from './Env'
import { runEnv } from './runEnv'

export const onDispose = curry(dispose) as {
  <A>(fn: () => void, env: Pure<A>): Pure<A>
  <A, B>(fn: () => void, env: Env<A, B>): Env<A, B>
  (fn: () => void): {
    <A>(env: Pure<A>): Pure<A>
    <A, B>(env: Env<A, B>): Env<A, B>
  }
}

function dispose<A, B>(fn: () => void, env: Env<A, B>): Env<A, B> {
  return {
    type: 'lazy',
    runEnv: (cb, resources) => {
      const disposable = runEnv(cb, resources, env)

      return {
        dispose: () => {
          disposable.dispose()
          fn()
        },
      }
    },
  }
}
