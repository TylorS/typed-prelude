import { Arity1, curry } from '@typed/lambda'

export const chain: {
  <A, B>(fn: Arity1<A, Iterable<B>>, iterable: Iterable<A>): Iterable<B>
  <A, B>(fn: Arity1<A, Iterable<B>>): (iterable: Iterable<A>) => Iterable<B>
} = curry(__chain)

export function* __chain<A, B>(fn: Arity1<A, Iterable<B>>, iterable: Iterable<A>): Iterable<B> {
  for (const a of iterable) {
    yield* fn(a)
  }
}
