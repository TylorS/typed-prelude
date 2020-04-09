import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const remove: {
  <A>(value: A, set: ReadonlySet<A>): ReadonlySet<A>
  <A>(value: A): (set: ReadonlySet<A>) => ReadonlySet<A>
} = curry(__remove)

function __remove<A>(value: A, set: ReadonlySet<A>): ReadonlySet<A> {
  return withMutations((x) => x.delete(value), set)
}
