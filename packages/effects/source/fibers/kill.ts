import { Resume } from '@typed/env'
import { Effects } from '../Effect'
import { Fiber, FiberState } from './Fiber'

export type Kill = {
  readonly kill: <A>(f: Fiber<A>) => Resume<boolean>
}

export const Kill: Kill = {
  kill<A>(fiber: Fiber<A>): Resume<boolean> {
    const { info } = fiber

    if (info.state === FiberState.Running) {
      fiber.info = { state: FiberState.Error, error: new KillError() }

      fiber.dispose()

      return Resume.of(true)
    }

    return Resume.of(false)
  },
}

export function* kill<A>(f: Fiber<A>): Effects<Kill, void> {
  return yield (c) => c.kill(f)
}

export class KillError extends Error {
  public static readonly message = `Kill`

  constructor() {
    super(KillError.message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this)
    }
  }
}
