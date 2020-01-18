import { createTimer, Timer } from '@typed/timer'
import { Channel } from './Channel'
import { createChannel } from './createChannel'

export const TimerChannel: Channel<Timer> = createChannel(createTimer())
