import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseRef } from './HookEnvironment'

export function* useRef<E, A>(inititalState?: InitialState<E, A>): HookEffects<E, UseRef<A>> {
  const { useRef } = yield* getHookEnv()
  const ref = yield* useRef(inititalState)

  return ref
}
