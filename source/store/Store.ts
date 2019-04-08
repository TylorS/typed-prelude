import { Env, map, Pure } from '@typed/env'
import { Arity1, pipe, tap } from '@typed/lambda'
import { createSubscription, Subscription } from '@typed/subscription'

export interface Store<S> {
  readonly getState: Pure<S>
  readonly setState: (update: Arity1<S, S>) => Pure<S>
  readonly reset: Pure<S>
  readonly subscribe: Subscription<S>['subscribe']
  readonly unsubscribe: Subscription<S>['unsubscribe']
}

export function createStore<S>(initialState: S): Store<S> {
  let currentState = initialState
  const { subscribe, unsubscribe, publish } = createSubscription<S>()
  const getState = Env.fromIO(() => currentState)
  const setState = (update: Arity1<S, S>): Pure<S> =>
    map(
      pipe(
        update,
        tap(s => publish((currentState = s))),
      ),
      getState,
    )
  const reset = Env.fromIO(() => (currentState = initialState))

  return {
    subscribe,
    unsubscribe,
    getState,
    setState,
    reset,
  }
}
