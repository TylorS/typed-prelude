import { createChannel } from '@typed/hooks'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createChannelHooks } from '../hooks'
import { TimerChannel } from './TimerChannel'

export const LoggerChannel = createChannel(
  createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: TimerChannel.defaultValue }),
)

export const [createUseLogger, createProvideLogger] = createChannelHooks(LoggerChannel)
