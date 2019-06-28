import { Arity1, curry } from '@typed/lambda'

export const map: {
  <A, B>(fn: Arity1<A, B>, set: ReadonlySet<A>): ReadonlySet<B>
  <A, B>(fn: Arity1<A, B>): (set: ReadonlySet<A>) => ReadonlySet<B>
} = curry(
  <A, B>(fn: Arity1<A, B>, set: ReadonlySet<A>): ReadonlySet<B> => {
    const bs = new Set<B>()

    set.forEach(a => bs.add(fn(a)))

    return bs
  },
)
