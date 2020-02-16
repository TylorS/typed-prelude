import { Arity1 } from '@typed/lambda'
import { Effects } from './Effect'

export function* sequence<E, A, B>(
  fn: Arity1<A, Effects<E, B>>,
  as: readonly A[],
): Effects<E, readonly B[]> {
  const bs: B[] = Array(as.length)

  for (let i = 0; i < as.length; ++i) {
    bs[i] = yield* fn(as[i])
  }

  return bs
}
