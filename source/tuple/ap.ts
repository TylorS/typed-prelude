import { Arity1, curry } from '../lambda'
import { chain } from './chain'
import { map } from './map'
import { Tuple } from './tuple'

export const ap: {
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>, value: Tuple<A, B>): Tuple<A, C>
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>): (value: Tuple<A, B>) => Tuple<A, C>
} = curry(
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>, value: Tuple<A, B>): Tuple<A, C> =>
    chain(f => map(f, value), fn),
)
