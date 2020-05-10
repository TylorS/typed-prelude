import { Disposable } from '@typed/disposable'
import { Env, Resume, runEnv } from '@typed/env'
import { CombinedCapabilities, CombinedValues, Effects } from '../Effect'
import { runEffect } from '../run'

export function* combine<E extends ReadonlyArray<Effects<any, any>>>(
  ...effects: E
): Effects<CombinedCapabilities<E>, CombinedValues<E>> {
  if (effects.length === 0) {
    return [] as any
  }

  return yield combineEnvs(effects.map(runEffect))
}

function combineEnvs<A, B extends any[]>(envs: Env<any, any>[]): Env<A, B> {
  return (c) =>
    Resume.create((cb) => {
      const hasValues = Array(envs.length).fill(false)
      const values = Array(envs.length) as B
      const disposable = Disposable.lazy()

      function onValue(value: B[number], index: number) {
        hasValues[index] = true
        values[index] = value

        if (hasValues.every(Boolean)) {
          disposable.addDisposable(cb(values))
        }

        return Disposable.None
      }

      for (let i = 0; i < envs.length; ++i) {
        disposable.addDisposable(runEnv((value) => onValue(value, i), c, envs[i]))
      }

      return disposable
    })
}
