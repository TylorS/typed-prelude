import { PureEffect } from '@typed/effects'

export type LoggerEnv = { readonly logger: Logger }

export const enum LogLevel {
  OFF,
  DEFAULT,
  INFO,
  DEBUG,
}

/**
 * Generic logging type
 */
export interface Logger {
  // Default
  readonly log: (msg: string) => PureEffect<void>
  readonly error: (msg: string) => PureEffect<void>
  readonly clear: () => PureEffect<void> // Ignored if > DEBUG
  // Info
  readonly info: (msg: string) => PureEffect<void>
  // Debug
  readonly debug: (msg: string) => PureEffect<void>
  readonly timeStart: (label: string) => PureEffect<void>
  readonly timeEnd: (label: string) => PureEffect<number>
}
