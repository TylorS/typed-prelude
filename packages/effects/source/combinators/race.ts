import { Disposable } from '@typed/disposable'
import { Env, provide, Pure, Resume, runPure } from '@typed/env'
import { CombinedCapabilities, Effect, Return } from '../Effect'
import { runEffect } from '../run'

export function* race<E extends ReadonlyArray<Effect<any, any>>>(
  ...effects: E
): Effect<Env<CombinedCapabilities<E>, Return<E[keyof E]>>, Return<E[keyof E]>> {
  const env: Env<CombinedCapabilities<E>, Return<E[keyof E]>> = (c: CombinedCapabilities<E>) =>
    Resume.create<Return<E[keyof E]>>((cb) => {
      const disposable = Disposable.lazy()
      const ifNotResolved = createIfNotResolved<Return<E[keyof E]>>(cb, disposable)

      for (const effect of effects) {
        const pure = provide(runEffect(effect), c as any) as Pure<Return<E[keyof E]>>

        disposable.addDisposable(runPure(ifNotResolved, pure))
      }

      return disposable
    })

  return yield env
}

function createIfNotResolved<A>(cb: (value: A) => Disposable, disposable: Disposable) {
  let resolved = false

  return (value: A) => {
    if (!resolved) {
      resolved = true

      disposable.dispose()

      return cb(value)
    }

    return Disposable.None
  }
}
