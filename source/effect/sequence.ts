import { disposeAll } from '@most/disposable'
import { Disposable } from '@most/types'
import { Effect, EffectValue } from './Effect'

export const sequence = <Resources extends {}, A extends Array<Effect<any, Resources>>>(
  ...effects: A
): Effect<AllValues<A>, Resources> =>
  Effect.create((cb, resources) => {
    const { scheduler } = resources
    const numberOfEffects = effects.length
    const hasValue = Array(numberOfEffects).fill(false)
    const running = Array(numberOfEffects).fill(false)
    const values = Array(numberOfEffects) as AllValues<A>
    const disposables: Disposable[] = []

    function addValue(index: number, value: A) {
      hasValue[index] = true
      values[index] = value

      if (hasValue.every(Boolean)) {
        cb(values, scheduler.currentTime())
      }

      const nextIndex = index + 1

      if (!running[nextIndex]) {
        runIndex(nextIndex)
      }
    }

    function runIndex(i: number) {
      if (!effects[i]) {
        return
      }

      const { runEffect } = effects[i]

      disposables.push(runEffect(a => addValue(i, a), resources))
      running[i] = true
    }

    runIndex(0)

    const dispose = () => disposeAll(disposables)

    return { dispose }
  })

type AllValues<A extends Array<Effect<any, any>>> = { [K in keyof A]: EffectValue<A[K]> }
