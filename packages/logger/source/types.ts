import { Pure } from '@typed/env'

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
  readonly log: (msg: string) => Pure<void>
  readonly error: (msg: string) => Pure<void>
  readonly clear: () => Pure<void> // Ignored if > DEBUG
  // Info
  readonly info: (msg: string) => Pure<void>
  // Debug
  readonly debug: (msg: string) => Pure<void>
  readonly timeStart: (label: string) => Pure<void>
  readonly timeEnd: (label: string) => Pure<number>
}
