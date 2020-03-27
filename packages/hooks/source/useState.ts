import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseState } from './HookEnvironment'

export function* useState<E, A>(initialState: InitialState<E, A>): HookEffects<E, UseState<A>> {
  const { useState } = yield* getHookEnv()

  return yield* useState(initialState)
}
