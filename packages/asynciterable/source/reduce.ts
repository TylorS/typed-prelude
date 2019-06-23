import { Arity2, curry } from '@typed/lambda'

export const reduce: {
  <A, B>(reducer: Arity2<B, A, B>, seed: B, asyncIterable: AsyncIterable<A>): Promise<B>
  <A, B>(reducer: Arity2<B, A, B>, seed: B): (asyncIterable: AsyncIterable<A>) => Promise<B>
  <A, B>(reducer: Arity2<B, A, B>): {
    (seed: B, asyncIterable: AsyncIterable<A>): Promise<B>
    (seed: B): (asyncIterable: AsyncIterable<A>) => Promise<B>
  }
} = curry(__reduce)

async function __reduce<A, B>(
  reducer: Arity2<B, A, B>,
  seed: B,
  asyncIterable: AsyncIterable<A>,
): Promise<B> {
  let accumulator = seed

  for await (const x of asyncIterable) {
    accumulator = reducer(accumulator, x)
  }

  return accumulator
}
