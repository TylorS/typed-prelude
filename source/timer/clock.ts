import { isBrowser } from '@typed/common/executionEnvironment'
import { Clock } from './types'

/** Create a performance clock */
export const createPerformanceClock = () => createRelativeClock(performanceClock)

/** Create a clock relative to the current time */
export const createRelativeClock = (clock: Clock): Clock =>
  new RelativeClock(clock, clock.currentTime())

// tslint:disable-next-line:no-var-requires
const performanceInstance: Performance = isBrowser ? performance : require('perf_hooks').performance
const performanceClock: Clock = { currentTime: () => performanceInstance.now() }

// tslint:disable-next-line:max-classes-per-file
class RelativeClock implements Clock {
  constructor(private clock: Clock, private origin: number) {}

  public currentTime() {
    return this.clock.currentTime() - this.origin
  }
}
