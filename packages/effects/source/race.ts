import { Disposable, disposeAll } from '@typed/disposable'
import { Env, handle, runPure } from '@typed/env'
import { pipe } from '@typed/lambda'
import { Effect, EffectResources, EffectValue } from './Effect'
import { runEffect } from './runEffect'

export function race<E extends ReadonlyArray<Effect<any, any>>>(
  ...effects: E
): Effect<EffectResources<E[keyof E]>, EffectValue<E[keyof E]>> {
  return Effect.fromEnv(
    Env.create<EffectResources<E[keyof E]>, EffectValue<E[keyof E]>>((cb, e) => {
      let resolved = false
      const pures = effects.map(pipe(runEffect, handle(e)))
      const pureDisposables: Disposable[] = pures.map((pure, i) =>
        runPure(a => ifNotResolved(a, i), pure),
      )
      const effectDisposable = Disposable.lazy()

      function ifNotResolved(value: EffectValue<E[keyof E]>, index: number) {
        if (!resolved) {
          resolved = true

          for (let i = 0; i < effects.length; ++i) {
            if (i !== index) {
              pureDisposables[i].dispose()
            }
          }

          const disposable = cb(value)

          return disposeAll([effectDisposable.addDisposable(disposable), disposable])
        }

        return Disposable.None
      }

      effectDisposable.addDisposable(disposeAll(pureDisposables))

      return effectDisposable
    }),
  )
}
