import { Arity1 } from '@typed/lambda'
import { CombinedCapabilities, Effects } from '../Effect'
import { FiberFailure, Fork, forkAll, Join, joinAll } from '../fibers'
import { chain } from './chain'
import { map } from './map'

export function* ap<E1, A, B, E2>(
  fn: Effects<E1, Arity1<A, B>>,
  value: Effects<E2, A>,
): Effects<
  CombinedCapabilities<[Effects<E1, Arity1<A, B>>, Effects<E2, A>]> & FiberFailure & Fork & Join,
  B
> {
  const [fFiber, vFiber] = yield* forkAll(fn, value)
  const [f, v] = yield* joinAll(fFiber, vFiber)

  return f(v)
}

export function apSeq<E1, A, B, E2>(
  fn: Effects<E1, Arity1<A, B>>,
  value: Effects<E2, A>,
): Effects<E1 & E2, B> {
  return chain((f) => map(f, value), fn)
}
