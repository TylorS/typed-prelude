import { dispose, disposeBoth, disposeNone } from '@most/disposable'
import { schedulerRelativeTo } from '@most/scheduler'
import { Effect, EffectResources } from './Effect'

export function switchLatest<A, B extends {} = {}>(effect: Effect<Effect<A, B>, B>): Effect<A, B> {
  return Effect.create((cb, resources) => {
    const relativeResources = (t: number): EffectResources<B> =>
      Object.assign({}, resources, {
        scheduler: schedulerRelativeTo(t, resources.scheduler),
      })

    let disposable = disposeNone()

    const rootDisposable = effect.runEffect(
      (a, t) => (dispose(disposable), (disposable = a.runEffect(cb, relativeResources(t)))),
      resources,
    )
    const dynamicDisposable = { dispose: () => dispose(disposable) }

    return disposeBoth(rootDisposable, dynamicDisposable)
  })
}
