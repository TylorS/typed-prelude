import { Resume } from '@typed/env'
import { Capabilities, Effects, Return } from '../Effect'
import { fail } from '../failures'
import { runEffects } from '../run/runEffects'
import { createFiber } from './createFiber'
import { Fiber, FiberFailure, FiberState } from './Fiber'

export type Fork = {
  readonly fork: <A extends Effects>(
    effect: A,
    c: Capabilities<A> & FiberFailure,
  ) => Resume<Fiber<Return<A>>>
}

export const Fork = {
  fork: <A extends Effects>(effect: A, c: Capabilities<A> & FiberFailure) => {
    const fiber = createFiber<Return<A>>()

    function* tryRunEffect() {
      try {
        fiber.info = { state: FiberState.Returned, value: yield* effect }
      } catch (error) {
        fiber.info = { state: FiberState.Error, error }

        yield* fail(FiberFailure, error)
      }
    }

    fiber.addDisposable(runEffects(tryRunEffect(), c))

    return Resume.of(fiber)
  },
}

export function* fork<A extends Effects>(
  effect: A,
): Effects<Capabilities<A> & Fork & FiberFailure, Fiber<Return<A>>> {
  return yield (c: Capabilities<A> & FiberFailure & Fork) => c.fork(effect, c)
}
