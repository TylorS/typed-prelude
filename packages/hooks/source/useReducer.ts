import { Effects } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { HookEffects } from './HookEffects'
import { InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useReducer<A, B>(
  reducer: Arity2<A, B, A>,
  seed: InitialState<A>,
): HookEffects<never, readonly [IO<Effects<never, A>>, Arity1<B, Effects<never, A>>]> {
  const [getState, updateState] = yield* useState(seed)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<never, typeof deps, Arity1<B, Effects<never, A>>>(
    createDispatch,
    deps,
  )

  return [getState, dispatch] as const
}

function createDispatch<A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => Effects<never, A>,
) {
  return (event: B): Effects<never, A> => updateState(state => reducer(state, event))
}
