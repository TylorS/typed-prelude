import { Scheduler } from '@most/types'
import { clone } from '@typed/objects'
import { Log, Logger, LogLevel, Logs } from '../types'

export type CreateTestLoggerOptions = {
  logLevel: LogLevel
  scheduler: Scheduler
}

export type TestLogger = {
  logger: Logger
  getLogs: () => Logs
}

export function createTestLogger({ logLevel, scheduler }: CreateTestLoggerOptions): TestLogger {
  const logs: Log[] = []
  const logger: Logger = {
    log: async (msg: string) => {
      if (logLevel > LogLevel.OFF) {
        logs.push({ type: 'log', message: msg })
      }
    },
    error: async (msg: string) => {
      if (logLevel > LogLevel.OFF) {
        logs.push({ type: 'error', message: msg })
      }
    },
    clear: async () => {
      if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
        logs.push({ type: 'clear' })
      }
    },
    info: async (msg: string) => {
      if (logLevel >= LogLevel.INFO) {
        logs.push({ type: 'info', message: msg })
      }
    },
    debug: async (msg: string) => {
      if (logLevel >= LogLevel.DEBUG) {
        logs.push({ type: 'debug', message: msg })
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

        logs.push({ type: 'time', label, elapsed })
      }
    },
  }

  return {
    logger,
    getLogs: () => clone(logs),
  }
}
