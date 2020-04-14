import { getHookEnv } from './getHookEnv'
import { HookEffects, InitialState, UseRef } from './types'

export function* useRef<E, A>(initialState?: InitialState<E, A>): HookEffects<E, UseRef<A>> {
  const { useRef } = yield* getHookEnv()
  const ref = yield* useRef(initialState)

  return ref
}
