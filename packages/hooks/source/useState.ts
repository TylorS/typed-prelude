import { co, Effects } from '@typed/effects'
import { getHookEnv } from './getHookEnv'
import { HookEnv, InitialState, UseState } from './HookEnvironment'

export const useState: <A>(inititalState: InitialState<A>) => Effects<HookEnv, UseState<A>> = co(
  function* useState<A>(inititalState: InitialState<A>) {
    const { useState } = yield* getHookEnv()

    return yield* useState(inititalState)
  },
)
