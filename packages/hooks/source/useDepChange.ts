import { didRefChange } from './didRefChange'
import { HookEffects } from './HookEffects'
import { useRef } from './useRef'

export function* useDepChange<A>(dep: A, firstRun: boolean = true): HookEffects<never, boolean> {
  const [ref, setRef] = yield* useRef<A>()

  return didRefChange(ref, setRef, dep, firstRun)
}
