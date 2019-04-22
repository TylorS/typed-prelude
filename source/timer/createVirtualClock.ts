import { VirtualClock } from './types'

/**
 * Create a VirtualClock
 * @param currentTime (optional) :: Time to start at
 */
export function createVirtualClock(currentTime: number = 0): VirtualClock {
  return {
    currentTime: () => currentTime,
    timePast: delayMs => (currentTime += delayMs),
  }
}
