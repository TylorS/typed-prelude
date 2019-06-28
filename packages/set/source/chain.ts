import { Arity1, curry } from '@typed/lambda'

export const chain: {
  <A, B>(fn: Arity1<A, ReadonlySet<B>>, set: ReadonlySet<A>): ReadonlySet<B>
  <A, B>(fn: Arity1<A, ReadonlySet<B>>): (set: ReadonlySet<A>) => ReadonlySet<B>
} = curry(
  <A, B>(fn: Arity1<A, ReadonlySet<B>>, set: ReadonlySet<A>): ReadonlySet<B> => {
    const bs = new Set<B>()

    set.forEach(a => fn(a).forEach(b => bs.add(b)))

    return bs
  },
)
