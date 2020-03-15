import { Effect } from '@typed/effects'
import { createTimer, Timer } from '@typed/timer'
import { Channel } from './Channel'
import { createChannel } from './createChannel'

export const TimerChannel: Channel<unknown, Timer> = createChannel(() => Effect.fromIO(createTimer))
