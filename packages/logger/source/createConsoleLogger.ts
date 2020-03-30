import { Pure } from '@typed/env'
import { Clock } from '@typed/timer'
import { Logger, LogLevel } from './types'

export type CreateConsoleLoggerOptions = {
  readonly logLevel: LogLevel
  readonly clock: Clock
}

/**
 * Create a logger that wraps the console.
 */
export function createConsoleLogger({ logLevel, clock }: CreateConsoleLoggerOptions): Logger {
  const timers: Record<string, number> = {}

  const logger: Logger = {
    log: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.log(msg)
        }
      }),
    error: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.error(msg)
        }
      }),
    clear: () =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
          console.clear()
        }
      }),
    info: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel >= LogLevel.INFO) {
          console.info(msg)
        }
      }),
    debug: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel >= LogLevel.DEBUG) {
          console.debug(msg)
        }
      }),
    timeStart: (label: string) =>
      Pure.fromIO(() => {
        if (logLevel < LogLevel.DEBUG) {
          return
        }

        timers[label] = clock.currentTime()
      }),
    timeEnd: (label: string) =>
      Pure.fromIO(() => {
        if (logLevel < LogLevel.DEBUG || !timers[label]) {
          return -1
        }

        const startTime = timers[label]
        const elapsed = clock.currentTime() - startTime
        delete timers[label]

        console.debug(`${label}: ${elapsed}ms`)

        return elapsed
      }),
  }

  return logger
}
