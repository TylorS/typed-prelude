import { Effect } from '../effect'
import { ArgsOf, curry, Fn } from '../lambda'
import { StoreUpdate, UpdateStateEffect } from './Store'

export type Action<Args extends any[], A> = Fn<Args, UpdateStateEffect<A>>
export type Actions<A = any> = Record<string, Action<any[], A>>
export type AppliedActions<A, B extends Actions> = { [K in keyof B]: Fn<ArgsOf<B[K]>, Effect<A>> }
export type ActionReturn<A extends Action<any[], any>> = A extends Action<any[], infer R>
  ? R
  : never

export const applyActions = curry(__applyActions) as {
  <A, B extends Actions>(actions: B, update: StoreUpdate<A>): AppliedActions<A, B>

  <B extends Actions>(actions: B): <A extends ActionReturn<B[keyof B]>>(
    update: StoreUpdate<A>,
  ) => AppliedActions<A, B>
}

function __applyActions<A, B extends Actions>(
  actions: B,
  update: StoreUpdate<A>,
): AppliedActions<A, B> {
  const keys = Object.keys(actions)

  const handlers = {} as AppliedActions<A, B>

  for (const key of keys) {
    handlers[key] = createHandler(actions[key], update)
  }

  return handlers
}

function createHandler<A, R, F extends Fn<any[], UpdateStateEffect<A, R>>>(
  fn: F,
  update: StoreUpdate<A>,
): Fn<ArgsOf<F>, Effect<A, R>> {
  return (...args: ArgsOf<F>) => {
    return update(fn(...args))
  }
}
