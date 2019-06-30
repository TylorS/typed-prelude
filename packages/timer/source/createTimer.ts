import { createClock } from './clock'
import { createSetTimeoutTimer } from './createSetTimeoutTimer'
import { Timer } from './types'

/**
 * Create a timer based on Performance and setTimeout
 */
export function createTimer(): Timer {
  return createSetTimeoutTimer(createClock())
}
