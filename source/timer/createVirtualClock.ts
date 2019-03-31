import { VirtualClock } from './types'

export function createVirtualClock(currentTime: number = 0): VirtualClock {
  return {
    currentTime: () => currentTime,
    timePast: delayMs => (currentTime += delayMs),
  }
}
