import { Disposable } from '@typed/disposable/source'
import { Env, runEnv } from '@typed/env'
import { Resume } from '@typed/env/source/Resume'
import { CombinedCapabilities, CombinedValues, Effect } from './Effect'
import { runEffect } from './runEffect'

export function* combine<E extends ReadonlyArray<Effect<any, any>>>(
  ...effects: E
): Effect<CombinedCapabilities<E>, CombinedValues<E>> {
  const value: CombinedValues<E> = yield combineEnvs(effects.map(runEffect))

  return value
}

function combineEnvs<E extends ReadonlyArray<Env<any, any>>>(envs: E): Env<any, any> {
  return c =>
    Resume.create(cb => {
      const hasValues = Array(envs.length).fill(false)
      const values = Array(envs.length)
      const disposable = Disposable.lazy()

      function onValue(value: any, index: number) {
        hasValues[index] = true
        values[index] = value

        if (hasValues.every(Boolean)) {
          disposable.addDisposable(cb(values))
        }

        return Disposable.None
      }

      for (let i = 0; i < envs.length; ++i) {
        disposable.addDisposable(runEnv(value => onValue(value, i), c, envs[i]))
      }

      return disposable
    })
}
