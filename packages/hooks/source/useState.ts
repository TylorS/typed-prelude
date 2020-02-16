import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseState } from './HookEnvironment'

export function* useState<A>(inititalState: InitialState<A>): HookEffects<never, UseState<A>> {
  const { useState } = yield* getHookEnv()

  return yield* useState(inititalState)
}
