import { createUseEffect, withCreateHook } from '@typed/hooks'
import { interval, Timer } from '@typed/timer'

export type UseTimerOptions = {
  readonly timer: Timer
  readonly delayMs: number
  readonly useInterval?: boolean
  readonly deps?: readonly any[]
}

export const createUseTimer = withCreateHook(
  createHook => [createHook(createUseEffect)] as const,
  (
    [useEffect],
    fn: (time: number) => void,
    { timer, delayMs, useInterval = false, deps = [] }: UseTimerOptions,
  ) =>
    useEffect(_ => (useInterval ? interval(fn, delayMs, timer) : timer.delay(fn, delayMs)), {
      timer,
      args: deps,
    }),
)
