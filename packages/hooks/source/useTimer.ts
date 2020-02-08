import { Timer } from '@typed/timer'
import { HookEffects } from './HookEffects'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'

export function* useTimer(): HookEffects<never, Timer> {
  return yield* useChannel(TimerChannel)
}
