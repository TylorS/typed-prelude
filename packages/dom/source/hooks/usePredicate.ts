import { Predicate } from '@typed/lambda'
import { useEffect, useState } from '../tagged'

export function usePredicate(fn: () => boolean): boolean
export function usePredicate<A>(fn: Predicate<A>, value: A): boolean

export function usePredicate<A>(fn: Predicate<A>, value?: A): boolean {
  const [state, setState] = useState(() => fn(value!))

  useEffect(() => setState(fn(value!)), [value])

  return state
}
