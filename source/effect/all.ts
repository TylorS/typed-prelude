import { disposeAll } from '@most/disposable'
import { Disposable } from '@most/types'
import { Effect, EffectValue } from './Effect'

export const all = <Resources extends {}, A extends Array<Effect<any, Resources>>>(
  ...effects: A
): Effect<AllValues<A>, Resources> =>
  Effect.create((cb, resources) => {
    const { scheduler } = resources
    const hasValue = effects.map(() => false)
    const values = Array(effects.length) as AllValues<A>
    const disposables: Disposable[] = []

    function addValue(index: number, value: A) {
      hasValue[index] = true
      values[index] = value

      if (hasValue.every(Boolean)) {
        cb(values, scheduler.currentTime())
      }
    }

    for (let i = 0; i < effects.length; ++i) {
      const { runEffect } = effects[i]

      disposables.push(runEffect(a => addValue(i, a), resources))
    }

    return disposeAll(disposables)
  })

type AllValues<A extends Array<Effect<any, any>>> = { [K in keyof A]: EffectValue<A[K]> }
