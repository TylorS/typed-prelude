import { Effect } from '@typed/effects'
import { Resume } from '@typed/env'

export interface RafEnv {
  readonly requestAnimationFrame: typeof requestAnimationFrame
  readonly cancelAnimationFrame: typeof cancelAnimationFrame
}

export function* raf(): Effect<RafEnv, number> {
  return yield ({ requestAnimationFrame, cancelAnimationFrame }) =>
    Resume.create(cb => {
      const id = requestAnimationFrame(cb)
      const dispose = () => cancelAnimationFrame(id)

      return { dispose }
    })
}
