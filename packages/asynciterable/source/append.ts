import { curry } from '@typed/lambda'

export const append: {
  <A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  <A>(value: A): (asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
} = curry(__append)

async function* __append<A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A> {
  yield* asyncIterable
  yield value
}
