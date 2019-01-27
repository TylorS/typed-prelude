import { disposeAll, disposeBoth } from '@most/disposable'
import { schedulerRelativeTo } from '@most/scheduler'
import { Disposable } from '@most/types'
import { Arity1, curry, IO } from '@typed/lambda'
import { MergeObjects } from '@typed/objects'
import { Effect, EffectResources } from './Effect'

export const chain = curry(__chain) as {
  <A, B, C extends {} = {}, D extends {} = C>(
    f: Arity1<A, Effect<B, C>>,
    effect: Effect<A, D>,
  ): Effect<B, MergeObjects<C, D>>

  <A, B extends {} = {}>(f: IO<Effect<A, B>>): <C extends {} = B>(
    effect: Effect<any, B>,
  ) => Effect<A, MergeObjects<B, C>>

  <A, B, C extends {} = {}>(f: Arity1<A, Effect<B, C>>): <D extends {} = C>(
    effect: Effect<A, D>,
  ) => Effect<B, MergeObjects<C, D>>
}

function __chain<A, B, C extends {} = {}, D extends {} = {}>(
  f: Arity1<A, Effect<B, C>>,
  effect: Effect<A, D>,
): Effect<B, MergeObjects<C, D>> {
  return Effect.create<B, MergeObjects<C, D>>(
    (cb: (value: B, time: number) => void, resources: EffectResources<MergeObjects<C, D>>) => {
      const relativeResources = (t: number) =>
        Object.assign({}, resources, {
          scheduler: schedulerRelativeTo(t, (resources as EffectResources).scheduler),
        })

      const disposables: Disposable[] = []
      const rootDisposable = effect.runEffect(
        (a, t) =>
          disposables.push(f(a).runEffect(cb, (relativeResources(t) as any) as EffectResources<C>)),
        (resources as any) as EffectResources<D>,
      )
      const dynamicDisposable = { dispose: () => disposeAll(disposables) }

      return disposeBoth(rootDisposable, dynamicDisposable)
    },
  )
}
