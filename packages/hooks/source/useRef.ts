import { Effect, get } from '@typed/effects'
import { Env, Pure } from '@typed/env'
import { HookEnvironment, InitialState, UseRef } from './HookEnvironment'

export function* useRef<A>(
  inititalState?: InitialState<A>,
): Effect<Env<HookEnvironment, HookEnvironment> | Pure<UseRef<A>>, UseRef<A>, any> {
  const { useRef } = yield* get<HookEnvironment>()
  const ref = yield* useRef(inititalState)

  return ref
}
