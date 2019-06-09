import { Predicate } from '@typed/lambda'
import * as React from 'react'

export function usePredicate(fn: () => boolean): boolean
export function usePredicate<A>(fn: Predicate<A>, value: A): boolean

export function usePredicate<A>(fn: Predicate<A>, value?: A): boolean {
  const [state, setState] = React.useState(() => fn(value!))

  React.useEffect(() => setState(fn(value!)), [value])

  return state
}
