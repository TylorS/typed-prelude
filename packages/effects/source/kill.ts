import { Resume } from '@typed/env'
import { Effect } from './Effect'
import { Fiber, FiberState } from './Fiber'

export type Kill = {
  readonly kill: <A>(f: Fiber<A>) => Resume<void>
}

export const Kill = {
  kill<A>(fiber: Fiber<A>): Resume<void> {
    const { info } = fiber

    if (info.state === FiberState.Running) {
      fiber.info = { state: FiberState.Error, error: new Error(`Killed`) }

      return Resume.of(fiber.dispose())
    }

    return Resume.of(void 0)
  },
}

export function* kill<A>(f: Fiber<A>): Effect<Kill, void> {
  return yield c => c.kill(f)
}
