import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'

export const ap: {
  <A, B>(fn: ReadonlySet<Arity1<A, B>>, value: ReadonlySet<A>): ReadonlySet<B>
  <A, B>(fn: ReadonlySet<Arity1<A, B>>): (value: ReadonlySet<A>) => ReadonlySet<B>
} = curry(
  <A, B>(fn: ReadonlySet<Arity1<A, B>>, value: ReadonlySet<A>): ReadonlySet<B> =>
    chain((f) => map(f, value), fn),
)
