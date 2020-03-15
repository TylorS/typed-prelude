import { didRefChange } from './didRefChange'
import { HookEffects } from './HookEffects'
import { useRef } from './useRef'

export function* useDepChange<A>(dep: A, firstRun: boolean = true): HookEffects<unknown, boolean> {
  const [ref, setRef] = yield* useRef<unknown, A>()

  return didRefChange(ref, setRef, dep, firstRun)
}
