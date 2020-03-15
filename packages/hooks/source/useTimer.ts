import { co, Effects } from '@typed/effects'
import { Timer } from '@typed/timer'
import { HookEnv } from './HookEnvironment'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'

export const useTimer: () => Effects<HookEnv, Timer> = co(function* useTimer() {
  const [getTimer] = yield* useChannel(TimerChannel)

  return yield* getTimer()
})
