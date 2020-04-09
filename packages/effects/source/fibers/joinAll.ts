import { combine } from '../combinators'
import { Effects } from '../Effect'
import { Fiber, FiberFailure } from './Fiber'
import { join, Join } from './join'

export function* joinAll<A extends ReadonlyArray<Fiber<any>>>(
  ...fibers: A
): Effects<FiberFailure & Join, JoinAll<A>> {
  const values = yield* combine<Effects<any, any>[]>(...fibers.map(join))

  return values as JoinAll<A>
}

export type JoinAll<A extends ReadonlyArray<Fiber<any>>> = {
  readonly [K in keyof A]: A[K] extends Fiber<infer R> ? R : never
}
