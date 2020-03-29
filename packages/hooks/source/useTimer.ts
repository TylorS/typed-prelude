import { Timer } from '@typed/timer'
import { HookEffects } from './HookEffects'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'

export function* useTimer(): HookEffects<unknown, Timer> {
  return yield* useChannel(TimerChannel)
}
