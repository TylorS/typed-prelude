import { Arity1, curry } from '@typed/lambda'
import { MergeObjects } from '@typed/objects'
import { chain } from './chain'
import { Effect } from './Effect'
import { map } from './map'

export const ap = curry(
  <A, B, C extends {} = {}, D extends {} = {}>(
    fn: Effect<Arity1<A, B>, C>,
    value: Effect<A, D>,
  ): Effect<B, MergeObjects<C, D>> => chain(x => map(f => f(x), fn), value),
) as {
  <A, B, C extends {} = {}, D extends {} = {}>(
    fn: Effect<Arity1<A, B>, C>,
    value: Effect<A, D>,
  ): Effect<B, MergeObjects<C, D>>

  <A, B, C extends {} = {}>(fn: Effect<Arity1<A, B>, C>): <D extends {} = C>(
    value: Effect<A, D>,
  ) => Effect<B, MergeObjects<C, D>>
}
