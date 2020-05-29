import { Arity1, curry } from '@typed/lambda'

export const chain: {
  <A, B>(fn: Arity1<A, AsyncIterable<B>>, asyncIterable: AsyncIterable<A>): AsyncIterable<B>
  <A, B>(fn: Arity1<A, AsyncIterable<B>>): (asyncIterable: AsyncIterable<A>) => AsyncIterable<B>
} = curry(__chain)

async function* __chain<A, B>(
  fn: Arity1<A, AsyncIterable<B>>,
  asyncIterable: AsyncIterable<A>,
): AsyncIterable<B> {
  for await (const a of asyncIterable) {
    yield* fn(a)
  }
}
