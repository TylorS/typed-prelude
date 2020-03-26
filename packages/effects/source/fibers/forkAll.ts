import { combine } from '../combinators'
import { CombinedCapabilities, Effect, Return } from '../Effect'
import { Fiber, FiberFailure } from './Fiber'
import { fork, Fork } from './fork'

export function* forkAll<A extends ReadonlyArray<Effect<any, any>>>(
  ...effects: A
): Effect<CombinedCapabilities<A> & FiberFailure & Fork, ForkAll<A>> {
  const values = yield* combine<Array<Effect<any, any>>>(...effects.map(fork))

  return values as ForkAll<A>
}

export type ForkAll<A extends ReadonlyArray<Effect<any, any>>> = {
  [K in keyof A]: Fiber<Return<A[K]>>
}
