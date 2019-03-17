export const enum LogLevel {
  OFF,
  DEFAULT,
  INFO,
  DEBUG,
}

export interface Logger {
  // Default
  readonly log: (msg: string) => Promise<void>
  readonly error: (msg: string) => Promise<void>
  readonly clear: () => Promise<void>
  // Info
  readonly info: (msg: string) => Promise<void>
  // Debug
  readonly debug: (msg: string) => Promise<void>
  readonly time: (label: string) => (elapsed?: number) => Promise<void>
}
