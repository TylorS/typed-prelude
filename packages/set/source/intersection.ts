import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const intersection: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A>
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => ReadonlySet<A>
} = curry(
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A> =>
    withMutations(x => x.forEach(y => !b.has(y) && x.delete(y)), a),
)
