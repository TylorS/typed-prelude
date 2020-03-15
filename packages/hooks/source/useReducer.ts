import { co, Effects, PureEffect } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { HookEnv, InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export const useReducer: <A, B>(
  reducer: Arity2<A, B, A>,
  seed: InitialState<A>,
) => Effects<HookEnv, readonly [IO<PureEffect<A>>, Arity1<B, PureEffect<A>>]> = co(
  function* useReducer<A, B>(reducer: Arity2<A, B, A>, seed: InitialState<A>) {
    const [getState, updateState] = yield* useState(seed)
    const deps = [reducer, updateState] as const
    const dispatch = yield* useMemo<typeof deps, (event: B) => PureEffect<A>>(createDispatch, deps)

    return [getState, dispatch] as const
  },
)

function createDispatch<A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => PureEffect<A>,
) {
  return (event: B): PureEffect<A> => updateState(state => reducer(state, event))
}
