import { Arity1 } from '@typed/lambda'
import { Clock, Timer } from './types'

export function createClockTimer(clock: Clock): Timer {
  return {
    ...clock,
    delay: (f, ms) => {
      if (ms <= 0) {
        return asap(f, clock)
      }

      const id = setTimeout(() => f(clock.currentTime()), ms)
      const dispose = () => clearTimeout(id)

      return { dispose }
    },
  }
}

function asap(f: Arity1<number>, clock: Clock) {
  let disposed = false

  Promise.resolve().then(() => !disposed && f(clock.currentTime()))

  const dispose = () => (disposed = true)

  return { dispose }
}
