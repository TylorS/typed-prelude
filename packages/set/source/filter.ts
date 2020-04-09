import { curry, Predicate } from '@typed/lambda'

export const filter: {
  <A>(predicate: Predicate<A>, set: ReadonlySet<A>): ReadonlySet<A>
  <A>(predicate: Predicate<A>): (set: ReadonlySet<A>) => ReadonlySet<A>
} = curry(__filter)

function __filter<A>(predicate: Predicate<A>, set: ReadonlySet<A>): ReadonlySet<A> {
  const filtered = new Set()

  set.forEach((x) => predicate(x) && filtered.add(x))

  return filtered as ReadonlySet<A>
}
