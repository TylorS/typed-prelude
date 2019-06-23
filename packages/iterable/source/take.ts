import { curry } from '@typed/lambda'

export const take = curry(__take) as {
  <A>(amount: number, iterable: Iterable<A>): Iterable<A>
  (amount: number): <A>(iterable: Iterable<A>) => Iterable<A>
}

function* __take<A>(amount: number, iterable: Iterable<A>): Iterable<A> {
  for (const x of iterable) {
    if (amount-- > 0) {
      yield x
    }
  }
}
