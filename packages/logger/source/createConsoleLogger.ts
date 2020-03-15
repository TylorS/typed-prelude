import { Effect } from '@typed/effects'
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
      Effect.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.log(msg)
        }
      }),
    error: (msg: string) =>
      Effect.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          console.error(msg)
        }
      }),
    clear: () =>
      Effect.fromIO(() => {
        if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
          console.clear()
        }
      }),
    info: (msg: string) =>
      Effect.fromIO(() => {
        if (logLevel >= LogLevel.INFO) {
          console.info(msg)
        }
      }),
    debug: (msg: string) =>
      Effect.fromIO(() => {
        if (logLevel >= LogLevel.DEBUG) {
          console.debug(msg)
        }
      }),
    timeStart: (label: string) =>
      Effect.fromIO(() => {
        if (logLevel < LogLevel.DEBUG) {
          return
        }

        timers[label] = clock.currentTime()
      }),
    timeEnd: (label: string) =>
      Effect.fromIO(() => {
        if (logLevel < LogLevel.DEBUG || !timers[label]) {
          return -1
        }

        const startTime = timers[label]
        const elapsed = startTime - clock.currentTime()
        delete timers[label]

        console.debug(`${label}: ${elapsed}ms`)

        return elapsed
      }),
  }

  return logger
}
