import { curry } from '@typed/lambda'

export const drop = curry(__drop) as {
  <A>(amount: number, iterable: Iterable<A>): Iterable<A>
  (amount: number): <A>(iterable: Iterable<A>) => Iterable<A>
}

function* __drop<A>(amount: number, iterable: Iterable<A>): Iterable<A> {
  for (const x of iterable) {
    if (--amount < 0) {
      yield x
    }
  }
}
