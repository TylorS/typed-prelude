import { curry } from '@typed/lambda'

export const concat: {
  <A>(a: AsyncIterable<A>, b: AsyncIterable<A>): AsyncIterable<A>
  <A>(a: AsyncIterable<A>): (b: AsyncIterable<A>) => AsyncIterable<A>
} = curry(__concat)

async function* __concat<A>(a: AsyncIterable<A>, b: AsyncIterable<A>): AsyncIterable<A> {
  yield* a
  yield* b
}
