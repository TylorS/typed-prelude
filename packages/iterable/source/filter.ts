import { curry, Predicate } from '@typed/lambda'

export const filter: {
  <A>(predicate: Predicate<A>, iterable: Iterable<A>): Iterable<A>
  <A>(predicate: Predicate<A>): (iterable: Iterable<A>) => Iterable<A>
} = curry(__filter)

function* __filter<A>(predicate: Predicate<A>, iterable: Iterable<A>): Iterable<A> {
  for (const x of iterable) {
    if (predicate(x)) {
      yield x
    }
  }
}
