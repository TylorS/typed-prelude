import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const add: {
  <A>(value: A, set: ReadonlySet<A>): ReadonlySet<A>
  <A>(value: A): (set: ReadonlySet<A>) => ReadonlySet<A>
} = curry(__add)

function __add<A>(value: A, set: ReadonlySet<A>): ReadonlySet<A> {
  return withMutations(x => x.add(value), set)
}
