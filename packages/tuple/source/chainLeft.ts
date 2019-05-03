import { Arity1, curry } from '@typed/lambda'
import { first, Tuple } from './tuple'

/**
 * Chain together tuples using the `first` value of a given tuple.
 * @param fn :: (a -> Tuple a c)
 * @param tuple :: Tuple a b
 * @returns Tuple a c
 */
export const chainLeft: {
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>, tuple: Tuple<A, B>): Tuple<C, B> => fn(first(tuple)),
)
