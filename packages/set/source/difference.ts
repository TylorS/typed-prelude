import { curry } from '@typed/lambda'
import { withMutations } from './withMutations'

export const difference: {
  <A>(a: ReadonlySet<A>, differenceOf: ReadonlySet<A>): ReadonlySet<A>
  <A>(a: ReadonlySet<A>): (differenceOf: ReadonlySet<A>) => ReadonlySet<A>
} = curry(
  <A>(a: ReadonlySet<A>, differenceOf: ReadonlySet<A>): ReadonlySet<A> =>
    withMutations((x) => x.forEach((y) => a.has(y) && x.delete(y)), differenceOf),
)
