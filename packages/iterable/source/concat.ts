import { curry } from '@typed/lambda'

export const concat: {
  <A>(a: Iterable<A>, b: Iterable<A>): Iterable<A>
  <A>(a: Iterable<A>): (b: Iterable<A>) => Iterable<A>
} = curry(__concat)

function* __concat<A>(a: Iterable<A>, b: Iterable<A>): Iterable<A> {
  yield* a
  yield* b
}
