export interface TypedTestConfig {
  readonly environment: TestEnvironment
  readonly files: string[]
  readonly timeout: number
  readonly keepAlive: boolean
  readonly typeCheck: boolean
  readonly watch: boolean
}

export type Options = Partial<TypedTestConfig>

export type TestEnvironment = 'node' | Browsers

export type Browsers =
  | 'chrome-headless'
  | 'chrome'
  | 'chromium'
  | 'firefox'
  | 'opera'
  | 'safari'
  | 'ie'
