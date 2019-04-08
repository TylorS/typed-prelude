import { chain, Env, handle, isEnv, Pure } from '@typed/env'
import { always, Arity1, Arity2, pipe } from '@typed/lambda'
import { Store } from './Store'

export type StoreReducer<E, S, A> = Arity2<S, A, S | Env<E, S>>

export function useReducer<E, S, A>(
  reducer: StoreReducer<E, S, A>,
  env: E,
  { setState, getState }: Store<S>,
): Arity1<A, Pure<S>> {
  const coerceReturnToEnv = (a: A) => (s: S): Env<E, S> => {
    const value = reducer(s, a)

    return isEnv<E, S>(value) ? value : Env.of<S>(value)
  }
  const dispatch = (action: A): Pure<S> => {
    const state = chain(coerceReturnToEnv(action), getState)
    const updatedState = chain(
      pipe(
        always,
        setState,
      ),
      state,
    )

    return handle(env, updatedState)
  }

  return dispatch
}
