import { Arity1, curry } from '../lambda'
import { chain } from './chain'
import { Effect } from './Effect'
import { map } from './map'

export const ap = curry(
  <A, B, C extends {} = {}, D extends {} = {}>(
    fn: Effect<Arity1<A, B>, C>,
    value: Effect<A, D>,
  ): Effect<B, C & D> => chain(f => map<A, B, D>(f, value), fn),
) as {
  <A, B, C extends {} = {}, D extends {} = {}>(
    fn: Effect<Arity1<A, B>, C>,
    value: Effect<A, D>,
  ): Effect<B, C & D>
  <A, B, C extends {} = {}>(fn: Effect<Arity1<A, B>, C>): <D extends {} = {}>(
    value: Effect<A, D>,
  ) => Effect<B, C & D>
}
