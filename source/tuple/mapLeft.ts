import { Arity1, curry } from '../lambda'
import { first, second, Tuple } from './tuple'

export const mapLeft: {
  <A, B, C>(fn: Arity1<A, C>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Arity1<A, C>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Arity1<A, C>, tuple: Tuple<A, B>): Tuple<C, B> => [fn(first(tuple)), second(tuple)],
)
