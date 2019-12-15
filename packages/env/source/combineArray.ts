import { Disposable, disposeAll } from '@typed/disposable'
import { curry, Fn } from '@typed/lambda'
import { Env, EnvOf } from './Env'
import { runEnv } from './runEnv'

/**
 * Combine many Environments into one
 */
export const combineArray = (curry(__combineArray) as any) as {
  <A extends any[], R, E>(fn: Fn<A, R>, envs: EnvOf<E, A>): Env<E, R>
  <A extends any[], R>(fn: Fn<A, R>): <E>(envs: EnvOf<E, A>) => Env<E, R>
}

function __combineArray<A extends any[], R, E>(fn: Fn<A, R>, envs: EnvOf<E, A>): Env<E, R> {
  const numberOfEnvs = envs.length

  return {
    type: 'lazy',
    runEnv: (f, e) => {
      const hasValues: boolean[] = Array(numberOfEnvs).fill(false)
      const values = Array(numberOfEnvs) as A

      function addValue(value: any, index: number) {
        hasValues[index] = true
        values[index] = value

        if (hasValues.every(Boolean)) {
          f(fn(...values))
        }
      }

      const disposables = envs.map((env, i) =>
        runEnv(a => (addValue(a, i), Disposable.None), e, env),
      )

      return disposeAll(disposables)
    },
  }
}
