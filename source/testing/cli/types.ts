import { Maybe } from '@typed/maybe'
import { CreateFuseBoxOptions, TsConfig } from '@typed/typescript'
import { LogLevel } from '../types'

export type TestConfig = {
  fileGlobs?: string[]
  environment?: TestEvironment
  timeout?: number
  typeCheck?: boolean
  watch?: boolean
  keepAlive?: boolean
  fuseBoxOptions?: CreateFuseBoxOptions
  tsConfig?: string
  logLevel?: LogLevel
}

export type CliOptions = {
  fileGlobs: Maybe<string[]>
  config: Maybe<string>
  tsConfig: Maybe<string>
  environment: Maybe<TestEvironment>
  timeout: Maybe<number>
  typeCheck: Maybe<boolean>
  watch: Maybe<boolean>
  keepAlive: Maybe<boolean>
  logLevel: Maybe<LogLevel>
  fuseBoxOptions: Maybe<CreateFuseBoxOptions>
}

export type RunOptions = {
  fileGlobs: string[]
  tsConfig: TsConfig
  environment: TestEvironment
  timeout: number
  typeCheck: boolean
  watch: boolean
  keepAlive: boolean
  logLevel: LogLevel
  fuseBoxOptions: CreateFuseBoxOptions
}

export const enum TestEvironment {
  Node,
  ChromeHeadless,
  Chrome,
  Chromium,
  Firefox,
  Opera,
  Safari,
  IE,
}
