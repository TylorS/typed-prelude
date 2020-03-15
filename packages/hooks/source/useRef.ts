import { co, Effects } from '@typed/effects'
import { getHookEnv } from './getHookEnv'
import { HookEnv, InitialState, UseRef } from './HookEnvironment'

export const useRef: <A>(inititalState?: InitialState<A>) => Effects<HookEnv, UseRef<A>> = co(
  function* useRef<A>(inititalState?: InitialState<A>) {
    const { useRef } = yield* getHookEnv()
    const ref = yield* useRef(inititalState)

    return ref
  },
)
