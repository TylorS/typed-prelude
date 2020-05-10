import { Effects, TimerEnv } from '@typed/effects'
import { Timer } from '@typed/timer'
import { TimerChannel } from './TimerChannel'
import { ChannelEffects, HookEnv } from './types'
import { useChannelValue } from './useChannel'

export function useTimer(): ChannelEffects<HookEnv & TimerEnv, Timer>
export function useTimer<E, A>(
  fn: (timer: Timer) => Effects<E, A>,
): ChannelEffects<HookEnv & TimerEnv, Timer>

export function* useTimer<E, A>(fn?: (timer: Timer) => Effects<E, A>) {
  const value = yield* useChannelValue(TimerChannel)

  if (!fn) {
    return value
  }

  return yield* fn(value)
}
