import { combine } from '../combinators'
import { Effects } from '../Effect'
import { Fiber, FiberFailure } from './Fiber'
import { kill, Kill } from './kill'

export function* killAll<A extends ReadonlyArray<Fiber<any>>>(
  ...fibers: A
): Effects<FiberFailure & Kill, void> {
  yield* combine<Effects<FiberFailure & Kill, void>[]>(...fibers.map(kill))
}
