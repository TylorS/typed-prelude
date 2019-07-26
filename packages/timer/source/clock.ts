import { isBrowser } from '@typed/common'
import { Clock } from './types'

/** Create a clock relative to the current time */
export const createRelativeClock = (clock: Clock): Clock =>
  new RelativeClock(clock, clock.currentTime())

export const createClock = (): Clock => {
  const clock = isBrowser
    ? { currentTime: () => performance.now() }
    : new HRTimeClock(process.hrtime, process.hrtime())

  const relative = createRelativeClock(clock)

  return relative
}

// tslint:disable-next-line:max-classes-per-file
class RelativeClock implements Clock {
  constructor(private clock: Clock, private origin: number) {}

  public currentTime = () => {
    return this.clock.currentTime() - this.origin
  }
}

// tslint:disable-next-line:max-classes-per-file
class HRTimeClock implements Clock {
  constructor(
    private hrtime: typeof process.hrtime,
    private origin: ReturnType<typeof process.hrtime>,
  ) {}

  public currentTime(): number {
    const hrt = this.hrtime(this.origin)
    return (hrt[0] * 1e9 + hrt[1]) / 1e6
  }
}
