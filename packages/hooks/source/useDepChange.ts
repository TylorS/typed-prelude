import { didRefChange } from './didRefChange'
import { HookEnvironment } from './HookEnvironment'
import { useRef } from './useRef'
import { WithHookEnvs } from './withHooks'

export function* useDepChange<A>(dep: A): Generator<WithHookEnvs<never>, boolean, HookEnvironment> {
  const [ref, setRef] = yield* useRef<A>()

  return didRefChange(ref, setRef, dep)
}
