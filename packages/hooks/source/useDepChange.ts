import { didRefChange } from './didRefChange'
import { useRef } from './useRef'

export function* useDepChange<A>(dep: A) {
  const [ref, setRef] = yield* useRef<A>()

  return didRefChange(ref, setRef, dep)
}
