import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'
import { Tuple } from './tuple'

/**
 * Apply the function in a tuple to the values in another using the second value.
 * @param fn :: Tuple a (b -> Tuple a c)
 * @param tuple :: Tuple a b
 * @returns Tuple a c
 */
export const ap: {
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>, value: Tuple<A, B>): Tuple<A, C>
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>): (value: Tuple<A, B>) => Tuple<A, C>
} = curry(
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>, value: Tuple<A, B>): Tuple<A, C> =>
    chain((f) => map(f, value), fn),
)
