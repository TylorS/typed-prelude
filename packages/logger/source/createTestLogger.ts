import { Pure } from '@typed/env'
import { clone } from '@typed/objects'
import { Clock } from '@typed/timer'
import { Logger, LogLevel } from './types'

export type CreateTestLoggerOptions = {
  readonly logLevel: LogLevel
  readonly clock: Clock
}

export type TestLogger = {
  readonly logger: Logger
  readonly getLogs: () => Logs
}

export type Logs = ReadonlyArray<Log>

export type Log =
  | { readonly type: 'log'; readonly message: string }
  | { readonly type: 'error'; readonly message: string }
  | { readonly type: 'clear' }
  | { readonly type: 'info'; readonly message: string }
  | { readonly type: 'debug'; readonly message: string }
  | { readonly type: 'timeStart'; readonly label: string; readonly time: number }
  | { readonly type: 'timeEnd'; readonly label: string; readonly time: number }

/**
 * Create a logger suitable for testing environments.
 */
export function createTestLogger({ logLevel, clock }: CreateTestLoggerOptions): TestLogger {
  const timers: Record<string, number> = {}
  const logs: Log[] = []
  const logger: Logger = {
    log: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          logs.push({ type: 'log', message: msg })
        }
      }),
    error: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF) {
          logs.push({ type: 'error', message: msg })
        }
      }),
    clear: () =>
      Pure.fromIO(() => {
        if (logLevel > LogLevel.OFF && logLevel < LogLevel.DEBUG) {
          logs.push({ type: 'clear' })
        }
      }),
    info: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel >= LogLevel.INFO) {
          logs.push({ type: 'info', message: msg })
        }
      }),
    debug: (msg: string) =>
      Pure.fromIO(() => {
        if (logLevel >= LogLevel.DEBUG) {
          logs.push({ type: 'debug', message: msg })
        }
      }),
    timeStart: (label: string) =>
      Pure.fromIO(() => {
        if (logLevel < LogLevel.DEBUG) {
          return
        }

        const time = clock.currentTime()
        timers[label] = time

        logs.push({ type: 'timeStart', label, time })
      }),
    timeEnd: (label: string) =>
      Pure.fromIO(() => {
        if (logLevel < LogLevel.DEBUG) {
          return -1
        }

        const time = clock.currentTime()
        const startTime = timers[label]
        const elapsed = startTime - time
        delete timers[label]

        logs.push({ type: 'timeEnd', label, time })

        return elapsed
      }),
  }

  return {
    logger,
    getLogs: () => clone(logs),
  }
}
