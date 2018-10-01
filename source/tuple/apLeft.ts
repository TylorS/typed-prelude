import { Arity1, curry } from '../lambda'
import { chainLeft } from './chainLeft'
import { mapLeft } from './mapLeft'
import { Tuple } from './tuple'

export const apLeft: {
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>, tuple: Tuple<A, B>): Tuple<C, B> =>
    chainLeft(f => mapLeft(f, tuple), fn),
)
