import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseRef } from './HookEnvironment'

export function* useRef<E, A>(initialState?: InitialState<E, A>): HookEffects<E, UseRef<A>> {
  const { useRef } = yield* getHookEnv()
  const ref = yield* useRef(initialState)

  return ref
}
