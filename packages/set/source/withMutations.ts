import { curry } from '@typed/lambda'

export const withMutations: {
  <A>(fn: (set: Set<A>) => void, set: ReadonlySet<A>): ReadonlySet<A>
  <A>(fn: (set: Set<A>) => void): (set: ReadonlySet<A>) => ReadonlySet<A>
} = curry(__withMutations)

function __withMutations<A>(fn: (set: Set<A>) => void, set: ReadonlySet<A>): ReadonlySet<A> {
  const newSet = new Set(set)

  fn(newSet)

  return newSet
}
