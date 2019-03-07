import { Maybe } from '@typed/maybe'
import { CreateFuseBoxOptions } from '@typed/typescript'

export type TestConfig = {
  fileGlobs?: string[]
  environment?: TestEvironment
  timeout?: number
  typeCheck?: boolean
  watch?: boolean
  keepAlive?: boolean
  fuseBoxOptions?: CreateFuseBoxOptions
}

export type CliOptions = {
  fileGlobs: string[]
  config: Maybe<string>
  environment: TestEvironment
  timeout: number
  typeCheck: boolean
  watch: boolean
  keepAlive: boolean
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
