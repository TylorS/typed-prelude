import { equals } from '@typed/logic'
import { fromJust, isNothing } from '@typed/maybe'
import { Ref } from './HookEnvironment'

export function didRefChange<A>(
  ref: Ref<A>,
  setRef: (value: A | undefined) => void,
  value: A,
  firstRun: boolean,
) {
  if (isNothing(ref.current)) {
    setRef(value)

    return firstRun
  }

  const changed = !equals(value, fromJust(ref.current))

  if (changed) {
    setRef(value)
  }

  return changed
}
