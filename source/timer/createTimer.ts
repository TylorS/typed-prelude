import { createPerformanceClock } from './clock'
import { createClockTimer } from './createClockTimer'

export function createTimer() {
  return createClockTimer(createPerformanceClock())
}
