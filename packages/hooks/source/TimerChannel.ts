import { createTimer } from '@typed/timer'
import { createChannel } from './createChannel'

export const TimerChannel = createChannel(createTimer())
