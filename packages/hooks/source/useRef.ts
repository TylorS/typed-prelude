import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseRef } from './HookEnvironment'

export function* useRef<A>(inititalState?: InitialState<A>): HookEffects<never, UseRef<A>> {
  const { useRef } = yield* getHookEnv()
  const ref = yield* useRef(inititalState)

  return ref
}
