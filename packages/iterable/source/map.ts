import { Arity1, curry } from '@typed/lambda'

export const map: {
  <A, B>(fn: Arity1<A, B>, iterable: Iterable<A>): Iterable<B>
  <A, B>(fn: Arity1<A, B>): (iterable: Iterable<A>) => Iterable<B>
} = curry(__map)

export function* __map<A, B>(fn: Arity1<A, B>, iterable: Iterable<A>): Iterable<B> {
  for (const a of iterable) {
    yield fn(a)
  }
}
