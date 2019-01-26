import { asap, newDefaultScheduler } from '@most/scheduler'
import { Disposable, Scheduler } from '@most/types'
import { Arity1, Arity2, curry, IO, noOp } from '../lambda'
import { callbackTask } from './callbackTask'

export type EffectResources<A extends {} = {}> = A & { scheduler: Scheduler }

// Generic Effect type
export interface Effect<A, B extends {} = {}> {
  readonly runEffect: Arity2<Arity2<A, number, void>, EffectResources<B>, Disposable>
}

export interface Pure<A> extends Effect<A> {
  readonly runEffect: Arity1<Arity2<A, number, void>, Disposable>
}

export namespace Effect {
  export const create = <A, B extends {} = {}>(
    runEffect: (cb: Arity2<A, number, void>, resources: EffectResources<B>) => Disposable,
  ): Effect<A, B> => ({ runEffect })

  export const of = <A>(value: A): Effect<A> =>
    create<A>((cb, { scheduler }) => asap(callbackTask<A>(cb, value), scheduler))

  export const fromIO = <A>(io: IO<A>): Effect<A> =>
    create<A>((cb, { scheduler }) =>
      asap(callbackTask((_, t) => cb(io(), t), undefined), scheduler),
    )
}

export const runEffect = curry(function runEffect<A, B extends {} = {}>(
  resources: EffectResources<B>,
  cb: Arity2<A, number, void>,
  effect: Effect<A>,
): Disposable {
  return effect.runEffect(cb, resources)
}) as {
  <A, B extends {} = {}>(
    resources: EffectResources<B>,
    cb: Arity2<A, number, void>,
    effect: Effect<A>,
  ): Disposable

  <A, B extends {} = {}>(resources: EffectResources<B>, cb: Arity2<A, number, void>): (
    effect: Effect<A>,
  ) => Disposable

  <B extends {} = {}>(resources: EffectResources<B>): {
    <A>(cb: Arity2<A, number, void>, effect: Effect<A>): Disposable
    <A>(cb: Arity2<A, number, void>): (effect: Effect<A>) => Disposable
  }
}

export function defaultResources(): EffectResources {
  return {
    scheduler: newDefaultScheduler(),
  }
}

export const runPure = curry(
  <A>(cb: (value: A, time: number) => void, pure: Pure<A>): Disposable => pure.runEffect(cb),
) as {
  <A>(cb: (value: A, time: number) => void, pure: Pure<A>): Disposable
  <A>(cb: (value: A, time: number) => void): (pure: Pure<A>) => Disposable
}

export const execEffect = curry(
  <A extends {} = {}>(resources: EffectResources<A>, eff: Effect<any, A>): Disposable =>
    eff.runEffect(noOp, resources),
) as {
  <A extends {} = {}>(resources: EffectResources<A>, eff: Effect<any, A>): Disposable
  <A extends {} = {}>(resources: EffectResources<A>): (eff: Effect<any, A>) => Disposable
}

export const execPure = (pure: Pure<any>): Disposable => pure.runEffect(noOp)
