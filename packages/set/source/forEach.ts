import { Arity1, curry } from '@typed/lambda'

export const forEach: {
  <A>(fn: Arity1<A>, set: ReadonlySet<A>): ReadonlySet<A>
  <A>(fn: Arity1<A>): (set: ReadonlySet<A>) => ReadonlySet<A>
} = curry(__forEach)

function __forEach<A>(fn: Arity1<A>, set: ReadonlySet<A>): ReadonlySet<A> {
  set.forEach(fn)

  return set
}
