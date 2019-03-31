import { createPerformanceClock } from './clock'
import { Clock, Timer } from './types'

export function createClockTimer(clock: Clock, delay: Timer['delay']): Timer {
  return {
    ...clock,
    delay,
  }
}

export function createPerformanceTimer(delay: Timer['delay']): Timer {
  return createClockTimer(createPerformanceClock(), delay)
}
