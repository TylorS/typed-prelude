import { co, Effects } from '@typed/effects'
import { didRefChange } from './didRefChange'
import { HookEnv } from './HookEnvironment'
import { useRef } from './useRef'

export const useDepChange: <A>(dep: A, firstRun?: boolean) => Effects<HookEnv, boolean> = co(
  function* useDepChange<A>(dep: A, firstRun: boolean = true) {
    const [ref, setRef] = yield* useRef<A>()

    return didRefChange(ref, setRef, dep, firstRun)
  },
)
