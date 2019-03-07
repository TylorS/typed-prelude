import { Maybe } from '@typed/maybe'

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
