import { Arity1, curry } from '../lambda'
import { second, Tuple } from './tuple'

export const chain: {
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>, tuple: Tuple<A, B>): Tuple<A, C>
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>): (tuple: Tuple<A, B>) => Tuple<A, C>
} = curry(
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>, tuple: Tuple<A, B>): Tuple<A, C> => fn(second(tuple)),
)
