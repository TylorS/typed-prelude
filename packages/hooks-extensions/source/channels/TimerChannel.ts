import { Channel, createChannel, createUseEffect, withCreateHook } from '@typed/hooks'
import { createTimer, interval, Timer } from '@typed/timer'
import { createChannelHooks } from '../hooks/createChannelHooks'

export const TimerChannel: Channel<Timer> = createChannel(createTimer())

export const [createUseTimerEnv, createProvideTimer] = createChannelHooks(TimerChannel)

export type UseTimerOptions = {
  readonly delayMs: number
  readonly useInterval?: boolean
  readonly deps?: readonly any[]
}

export const createUseTimer = withCreateHook(
  createHook => [createHook(createUseEffect), createHook(createUseTimerEnv)] as const,
  (
    [useEffect, useTimerEnv],
    fn: (time: number) => void,
    { delayMs, useInterval = false, deps = [] }: UseTimerOptions,
  ) => {
    const timer = useTimerEnv()

    return useEffect(_ => (useInterval ? interval(fn, delayMs, timer) : timer.delay(fn, delayMs)), {
      timer,
      args: deps,
    })
  },
)
