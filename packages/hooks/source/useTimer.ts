import { Timer } from '@typed/timer'
import { HookEffects } from './types'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'
import { TimerEnv } from '@typed/effects'

export function* useTimer(): HookEffects<TimerEnv, Timer> {
  return yield* useChannel(TimerChannel)
}
