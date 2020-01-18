import { Effect } from '@typed/effects'
import { Env } from '@typed/env'
import { Arity2 } from '@typed/lambda'
import { useMemo } from './useMemo'
import { useState } from './useState'
import { WithHookEnvs } from './WithHookEnvs'

export function* useReducer<A, B>(
  reducer: Arity2<A, B, A>,
  seed: A,
): Generator<WithHookEnvs<never>, readonly [A, (event: B) => Effect<Env<never, A>, A, any>], any> {
  const [getState, updateState] = yield* useState(seed)
  const dispatch = yield* useMemo(
    reducer => (event: B) => updateState(state => reducer(state, event)),
    [reducer],
  )

  return [getState(), dispatch] as const
}
