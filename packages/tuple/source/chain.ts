import { Arity1, curry } from '@typed/lambda'
import { second, Tuple } from './tuple'

/**
 * Chain together tuples using the `second` value of a given tuple.
 * @param fn :: (b -> Tuple a c)
 * @param tuple :: Tuple a b
 * @returns Tuple a c
 */
export const chain: {
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>, tuple: Tuple<A, B>): Tuple<A, C>
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>): (tuple: Tuple<A, B>) => Tuple<A, C>
} = curry(
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>, tuple: Tuple<A, B>): Tuple<A, C> => fn(second(tuple)),
)
