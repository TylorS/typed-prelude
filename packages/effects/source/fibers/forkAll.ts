import { combine } from '../combinators'
import { CombinedCapabilities, Effect, Return } from '../Effect'
import { Fiber, FiberFailure } from './Fiber'
import { fork, Fork } from './fork'

export function* forkAll<A extends ReadonlyArray<Effect<any, any>>>(
  ...effects: A
): Effect<CombinedCapabilities<A> & FiberFailure & Fork, { [K in keyof A]: Fiber<Return<A[K]>> }> {
  const values = yield* combine<Array<Effect<any, any>>>(...effects.map(fork))

  return values as { [K in keyof A]: Fiber<Return<A[K]>> }
}
