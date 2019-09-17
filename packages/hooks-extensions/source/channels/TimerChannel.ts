import { Channel, createChannel } from '@typed/hooks'
import { createTimer, Timer } from '@typed/timer'
import { createChannelHooks } from '../hooks'

export const TimerChannel: Channel<Timer> = createChannel(createTimer())

export const [createUseTimerEnv, createProvideTimer] = createChannelHooks(TimerChannel)
