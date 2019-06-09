import { Pure } from '@typed/env'
import { usePureState } from './usePureState'

const withMutations = <A>(fn: (set: Set<A>) => void) => (set: ReadonlySet<A>) => {
  const updatedSet = new Set(set)

  fn(updatedSet)

  return updatedSet
}

export function useSet<A>(
  initialValue: ReadonlySet<A> = new Set(),
): [ReadonlySet<A>, (updateSet: (set: Set<A>) => void) => Pure<ReadonlySet<A>>] {
  const [set, setSet] = usePureState(initialValue)
  const updateSet = (fn: (set: Set<A>) => void) => setSet(withMutations(fn))

  return [set, updateSet]
}
