import { Effects } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { HookEffects } from './HookEffects'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useReducer<A, B>(
  reducer: Arity2<A, B, A>,
  seed: A,
): HookEffects<never, readonly [IO<Effects<never, A>>, Arity1<B, Effects<never, A>>]> {
  const [getState, updateState] = yield* useState(seed)
  const dispatch = yield* useMemo(
    reducer => (event: B) => updateState(state => reducer(state, event)),
    [reducer],
  )

  return [getState, dispatch] as const
}
