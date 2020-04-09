import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'

/**
 * Apply an async iterable of functions to an async iterable of values.
 */
export const ap = curry(
  <A, B>(fn: Iterable<Arity1<A, B>>, value: Iterable<A>): Iterable<B> =>
    chain((f) => map(f, value), fn),
) as {
  <A, B>(fn: Iterable<Arity1<A, B>>, value: Iterable<A>): Iterable<B>
  <A, B>(fn: Iterable<Arity1<A, B>>): (value: Iterable<A>) => Iterable<B>
}
