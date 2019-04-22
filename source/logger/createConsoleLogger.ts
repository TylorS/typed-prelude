import { Env } from '@typed/env'
import { Clock } from '@typed/timer'
import { Logger, LogLevel } from './types'

export type CreateConsoleLoggerOptions = {
  logLevel: LogLevel
  clock: Clock
}

/**
 * Create a logger that wraps the console.
 */
export function createConsoleLogger({ logLevel, clock }: CreateConsoleLoggerOptions): Logger {
  const timers: Record<string, number> = {}

  const logger: Logger = {
    log: (msg: string) =>
      Env.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.log(msg)
        }
      }),
    error: (msg: string) =>
      Env.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.error(msg)
        }
      }),
    clear: () =>
      Env.fromIO(() => {
        if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
          console.clear()
        }
      }),
    info: (msg: string) =>
      Env.fromIO(() => {
        if (logLevel >= LogLevel.INFO) {
          console.info(msg)
        }
      }),
    debug: (msg: string) =>
      Env.fromIO(() => {
        if (logLevel >= LogLevel.DEBUG) {
          console.debug(msg)
        }
      }),
    timeStart: (label: string) =>
      Env.fromIO(() => {
        if (logLevel < LogLevel.DEBUG) {
          return
        }

        timers[label] = clock.currentTime()
      }),
    timeEnd: (label: string) =>
      Env.fromIO(() => {
        if (logLevel < LogLevel.DEBUG || !timers[label]) {
          return
        }

        const startTime = timers[label]

        console.debug(`${label}: ${startTime - clock.currentTime()}ms`)
      }),
  }

  return logger
}
