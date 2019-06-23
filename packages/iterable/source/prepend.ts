import { curry } from '@typed/lambda'

export const prepend: {
  <A>(value: A, iterable: Iterable<A>): Iterable<A>
  <A>(value: A): (iterable: Iterable<A>) => Iterable<A>
} = curry(__prepend)

function* __prepend<A>(value: A, iterable: Iterable<A>): Iterable<A> {
  yield value

  for (const x of iterable) {
    yield x
  }
}
