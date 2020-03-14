import { Arity1, curry } from '@typed/lambda'
import { co } from 'fx-ts'
import { Effect } from './Effect'

export const sequence: {
  <E, A, B>(fn: Arity1<A, Effect<E, B>>, as: readonly A[]): Effect<E, readonly B[]>
  <E, A, B>(fn: Arity1<A, Effect<E, B>>): (as: readonly A[]) => Effect<E, readonly B[]>
} = curry(
  co(function* sequence<E, A, B>(fn: Arity1<A, Effect<E, B>>, as: readonly A[]) {
    const bs: B[] = Array(as.length)

    for (let i = 0; i < as.length; ++i) {
      bs[i] = yield* fn(as[i])
    }

    return bs
  }),
)
