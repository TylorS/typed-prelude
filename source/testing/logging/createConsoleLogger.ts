import { Scheduler } from '@most/types'
import { Logger, LogLevel } from '../types'

export type CreateConsoleLoggerOptions = {
  logLevel: LogLevel
  scheduler: Scheduler
}

export function createConsoleLogger({ logLevel, scheduler }: CreateConsoleLoggerOptions): Logger {
  const logger: Logger = {
    log: async (msg: string) => {
      if (logLevel > LogLevel.OFF) {
        console.log(msg)
      }
    },
    error: async (msg: string) => {
      if (logLevel > LogLevel.OFF) {
        console.error(msg)
      }
    },
    clear: async () => {
      if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
        console.clear()
      }
    },
    info: async (msg: string) => {
      if (logLevel >= LogLevel.INFO) {
        console.info(msg)
      }
    },
    debug: async (msg: string) => {
      if (logLevel >= LogLevel.DEBUG) {
        console.debug(msg)
      }
    },
    time: (label: string) => {
      if (logLevel < LogLevel.DEBUG) {
        return async () => void 0
      }

      const start = scheduler.currentTime()

      return async () => {
        const end = scheduler.currentTime()
        const elapsed = end - start

        await logger.debug(`${label}: ${elapsed}ms`)
      }
    },
  }

  return logger
}
