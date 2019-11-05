import { Arity2, curry } from '@typed/lambda'

export const reduce: {
  <A, B>(reducer: Arity2<B, A, B>, seed: B, iterable: Iterable<A>): Promise<B>
  <A, B>(reducer: Arity2<B, A, B>, seed: B): (iterable: Iterable<A>) => Promise<B>
  <A, B>(reducer: Arity2<B, A, B>): {
    (seed: B, iterable: Iterable<A>): Promise<B>
    (seed: B): (iterable: Iterable<A>) => Promise<B>
  }
} = curry(__reduce) as any

function __reduce<A, B>(reducer: Arity2<B, A, B>, seed: B, iterable: Iterable<A>): B {
  let accumulator = seed

  for (const x of iterable) {
    accumulator = reducer(accumulator, x)
  }

  return accumulator
}
