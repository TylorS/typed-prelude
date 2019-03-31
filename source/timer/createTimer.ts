import { createPerformanceTimer } from './createClockTimer'
import { setTimeoutDelay } from './setTimeoutDelay'

export function createTimer() {
  return createPerformanceTimer(setTimeoutDelay)
}
