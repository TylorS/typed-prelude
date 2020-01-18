import { get } from '@typed/effects'
import { HookEnvironment, InitialState } from './HookEnvironment'

export function* useState<A>(inititalState: InitialState<A>) {
  const { useState } = yield* get<HookEnvironment>()

  return yield* useState(inititalState)
}
