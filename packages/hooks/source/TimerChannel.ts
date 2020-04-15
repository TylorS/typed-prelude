import { get, TimerEnv } from '@typed/effects'
import { Timer } from '@typed/timer'
import { Channel } from './Channel'
import { createChannel } from './createChannel'

export const TimerChannel: Channel<TimerEnv, Timer> = createChannel<TimerEnv, Timer>(function* () {
  const { timer } = yield* get<TimerEnv>()

  return timer
})
