import { getHookEnv } from './getHookEnv'
import { HookEffects, InitialState, UseState } from './types'

export function* useState<E, A>(initialState: InitialState<E, A>): HookEffects<E, UseState<A>> {
  const { useState } = yield* getHookEnv()

  return yield* useState(initialState)
}
