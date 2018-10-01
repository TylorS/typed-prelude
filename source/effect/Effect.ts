import { asap } from '@most/scheduler'
import { Disposable, Scheduler } from '@most/types'
import { Arity2, IO } from '../lambda'
import { callbackTask } from './callbackTask'

export type EffectResources<A extends {} = {}> = A & { scheduler: Scheduler }

export interface Effect<A, B extends {} = {}> {
  readonly runEffect: Arity2<Arity2<A, number, void>, EffectResources<B>, Disposable>
}

export namespace Effect {
  export const create = <A, B extends {} = {}>(
    // tslint:disable-next-line:no-shadowed-variable
    runEffect: (cb: Arity2<A, number, void>, resources: EffectResources<B>) => Disposable,
  ): Effect<A, B> => ({ runEffect })

  export const of = <A>(value: A): Effect<A> =>
    create<A>((cb, { scheduler }) => asap(callbackTask<A>(cb, value), scheduler))

  export const fromIO = <A>(io: IO<A>): Effect<A> =>
    create<A>((cb, { scheduler }) => asap(callbackTask((_, t) => cb(io(), t), void 0), scheduler))
}

export function runEffect<A, B extends {} = {}>(
  cb: Arity2<A, number, void>,
  resources: EffectResources<B>,
  effect: Effect<A>,
): Disposable {
  return effect.runEffect(cb, resources)
}
