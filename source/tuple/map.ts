import { Arity1, curry } from '@typed/lambda'
import { first, second, Tuple } from './tuple'

/**
 * Map the second value of a tuple
 * @param fn:: (b -> c)
 * @param tuple :: Tuple a b
 * @returns :: Tuple a c
 */
export const map: {
  <A, B, C>(fn: Arity1<B, C>, tuple: Tuple<A, B>): Tuple<A, C>
  <A, B, C>(fn: Arity1<B, C>): (tuple: Tuple<A, B>) => Tuple<A, C>
} = curry(
  <A, B, C>(fn: Arity1<B, C>, tuple: Tuple<A, B>): Tuple<A, C> => [first(tuple), fn(second(tuple))],
)
