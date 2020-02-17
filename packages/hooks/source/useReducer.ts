import { Effects } from '@typed/effects'
import { Arity1, Arity2 } from '@typed/lambda'
import { InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useReducer<A, B>(reducer: Arity2<A, B, A>, seed: InitialState<A>) {
  const [getState, updateState] = yield* useState(seed)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<typeof deps, Arity1<B, Effects<never, A>>>(createDispatch, deps)

  return [getState, dispatch] as const
}

function createDispatch<A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => Effects<never, A>,
) {
  return (event: B): Effects<never, A> => updateState(state => reducer(state, event))
}
