import { Effects } from '@typed/effects'
import { Timer } from '@typed/timer'
import { TimerChannel } from './TimerChannel'
import { useChannel } from './useChannel'

export function* useTimer<E>(): Effects<E, Timer> {
  const [getTimer] = yield* useChannel(TimerChannel)

  return yield* getTimer()
}
