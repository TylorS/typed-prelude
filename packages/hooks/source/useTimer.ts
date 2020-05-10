import { TimerEnv } from '@typed/effects'
import { Timer } from '@typed/timer'
import { TimerChannel } from './TimerChannel'
import { ChannelEffects, HookEnv } from './types'
import { useChannelValue } from './useChannel'

export function* useTimer(): ChannelEffects<HookEnv & TimerEnv, Timer> {
  return yield* useChannelValue(TimerChannel)
}
