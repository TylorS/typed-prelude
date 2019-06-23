import { curry } from '@typed/lambda'

export const append: {
  <A>(value: A, iterable: Iterable<A>): Iterable<A>
  <A>(value: A): (iterable: Iterable<A>) => Iterable<A>
} = curry(__append)

function* __append<A>(value: A, iterable: Iterable<A>): Iterable<A> {
  yield* iterable
  yield value
}
