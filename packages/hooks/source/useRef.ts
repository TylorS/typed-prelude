import { get } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnvironment, InitialState, UseRef } from './HookEnvironment'

export function* useRef<A>(inititalState?: InitialState<A>): HookEffects<never, UseRef<A>> {
  const { useRef } = yield* get<HookEnvironment>()
  const ref = yield* useRef(inititalState)

  return ref
}
