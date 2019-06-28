import { curry } from '@typed/lambda'

export const concat: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A>
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => ReadonlySet<A>
} = curry(
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A> => {
    const set = new Set()

    a.forEach(x => set.add(x))
    b.forEach(x => set.add(x))

    return set
  },
)
