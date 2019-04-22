import { Arity1, curry } from '@typed/lambda'
import { first, second, Tuple } from './tuple'

/**
 * Map the first value of a tuple
 * @param fn:: (a -> c)
 * @param tuple :: Tuple a b
 * @returns :: Tuple c b
 */
export const mapLeft: {
  <A, B, C>(fn: Arity1<A, C>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Arity1<A, C>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Arity1<A, C>, tuple: Tuple<A, B>): Tuple<C, B> => [fn(first(tuple)), second(tuple)],
)
