import { combine } from '../combinators'
import { CombinedCapabilities, Effect, Effects, Return } from '../Effect'
import { Fiber, FiberFailure } from './Fiber'
import { fork, Fork } from './fork'

export function* forkAll<A extends ReadonlyArray<Effect<any, any>>>(
  ...effects: A
): Effects<CombinedCapabilities<A> & FiberFailure & Fork, ForkAll<A>> {
  return (yield* combine(...effects.map(fork))) as ForkAll<A>
}

export type ForkAll<A extends ReadonlyArray<Effect<any, any>>> = {
  readonly [K in keyof A]: Fiber<Return<A[K]>>
}
