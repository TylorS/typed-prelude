import { Arity1, curry } from '@typed/lambda'
import { chainLeft } from './chainLeft'
import { mapLeft } from './mapLeft'
import { Tuple } from './tuple'

/**
 * Apply the function in a tuple to the values in another using the left value.
 * @param fn :: Tuple (a -> Tuple a c) b
 * @param tuple :: Tuple a b
 * @returns Tuple a c
 */
export const apLeft: {
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>, tuple: Tuple<A, B>): Tuple<C, B>
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>): (tuple: Tuple<A, B>) => Tuple<C, B>
} = curry(
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>, tuple: Tuple<A, B>): Tuple<C, B> =>
    chainLeft((f) => mapLeft(f, tuple), fn),
)
