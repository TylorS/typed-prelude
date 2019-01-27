import { Arity1, curry } from '@typed/lambda'
import { first, Tuple } from './tuple'

export const chainLeft: {
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>, tuple: Tuple<A, B>): Tuple<C, B> => fn(first(tuple)),
)
