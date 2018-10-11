import { disposeAll, disposeBoth } from '@most/disposable'
import { schedulerRelativeTo } from '@most/scheduler'
import { Disposable } from '@most/types'
import { Arity1, curry } from '../lambda'
import { Effect, EffectResources } from './Effect'

export const chain = curry(__chain) as {
  <A, B, C extends {} = {}, D extends {} = {}>(
    f: Arity1<A, Effect<B, C>>,
    effect: Effect<A, D>,
  ): Effect<B, C & D>

  <A, B, C extends {} = {}>(f: Arity1<A, Effect<B, C>>): <D extends {} = {}>(
    effect: Effect<A, D>,
  ) => Effect<B, C & D>
}

function __chain<A, B, C extends {} = {}, D extends {} = {}>(
  f: Arity1<A, Effect<B, C>>,
  effect: Effect<A, D>,
): Effect<B, C & D> {
  return Effect.create<B, C & D>((cb, resources) => {
    const relativeResources = (t: number): EffectResources<C & D> =>
      Object.assign({}, resources, {
        scheduler: schedulerRelativeTo(t, resources.scheduler),
      })
    const disposables: Disposable[] = []
    const rootDisposable = effect.runEffect(
      (a, t) => disposables.push(f(a).runEffect(cb, relativeResources(t))),
      resources,
    )
    const dynamicDisposable = { dispose: () => disposeAll(disposables) }

    return disposeBoth(rootDisposable, dynamicDisposable)
  })
}
