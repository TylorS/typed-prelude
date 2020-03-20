import { Arity1 } from '@typed/lambda'
import { Effect } from '../Effect'

export function* sequence<E, A, B>(
  fn: Arity1<A, Effect<E, B>>,
  as: readonly A[],
): Effect<E, readonly B[]> {
  const bs: B[] = Array(as.length)

  for (let i = 0; i < as.length; ++i) {
    bs[i] = yield* fn(as[i])
  }

  return bs
}
