import { didRefChange } from './didRefChange'
import { HookEffects } from './HookEffects'
import { useRef } from './useRef'

export function* useDepChange<A>(dep: A): HookEffects<never, boolean> {
  const [ref, setRef] = yield* useRef<A>()

  return didRefChange(ref, setRef, dep)
}
