import { PureEffect } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { HookEffects } from './HookEffects'
import { InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useReducer<E, A, B>(
  reducer: Arity2<A, B, A>,
  seed: InitialState<E, A>,
): HookEffects<E, readonly [IO<PureEffect<A>>, Arity1<B, PureEffect<A>>]> {
  const [getState, updateState] = yield* useState(seed)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<unknown, typeof deps, Arity1<B, PureEffect<A>>>(
    createDispatch,
    deps,
  )

  return [getState, dispatch] as const
}

function createDispatch<A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => PureEffect<A>,
) {
  return (event: B): PureEffect<A> => updateState(state => reducer(state, event))
}
