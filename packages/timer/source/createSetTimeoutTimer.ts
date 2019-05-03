import { Arity1 } from '@typed/lambda'
import { Clock, Timer } from './types'

/**
 * Createa timer from a clock and setTimeout.
 * Also tries to run tasks with delay of 0 using micro-tasks
 * by way of a Promise.
 */
export function createSetTimeoutTimer(clock: Clock): Timer {
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
