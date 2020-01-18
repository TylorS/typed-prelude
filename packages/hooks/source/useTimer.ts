import { Timer } from '@typed/timer'
import { HookEnvironment } from './HookEnvironment'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'
import { WithHookEnvs } from './WithHookEnvs'

export function* useTimer(): Generator<WithHookEnvs<never>, Timer, HookEnvironment> {
  return yield* useChannel(TimerChannel)
}
