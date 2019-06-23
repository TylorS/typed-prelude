import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'

/**
 * Apply an async iterable of functions to an async iterable of values.
 */
export const ap = curry(
  <A, B>(fn: AsyncIterable<Arity1<A, B>>, value: AsyncIterable<A>): AsyncIterable<B> =>
    chain(f => map(f, value), fn),
) as {
  <A, B>(fn: AsyncIterable<Arity1<A, B>>, value: AsyncIterable<A>): AsyncIterable<B>
  <A, B>(fn: AsyncIterable<Arity1<A, B>>): (value: AsyncIterable<A>) => AsyncIterable<B>
}
