import { get } from '@typed/effects'
import { HookEnvironment, InitialState, UseState } from './HookEnvironment'
import { WithHookEnvs } from './withHooks'

export function* useState<A>(
  inititalState: InitialState<A>,
): Generator<WithHookEnvs<never>, UseState<A>, HookEnvironment> {
  const { useState } = yield* get<HookEnvironment>()

  return yield* useState(inititalState)
}
