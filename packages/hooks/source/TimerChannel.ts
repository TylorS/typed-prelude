import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { createTimer, Timer } from '@typed/timer'
import { Channel } from './Channel'
import { createChannel } from './createChannel'

export const TimerChannel: Channel<never, Timer> = createChannel(() =>
  Effect.fromEnv(Pure.fromIO(createTimer)),
)
