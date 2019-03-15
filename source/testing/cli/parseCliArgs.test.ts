import { Maybe, Nothing } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { parseCliArgs } from './parseCliArgs'
import { CliOptions } from './types'

const directory = __dirname
const cli = (...args: string[]) => parseCliArgs({ directory, args, version: '1.0.0' })

const config = (options: Partial<CliOptions> = {}): CliOptions => ({
  fileGlobs: Nothing,
  config: Nothing,
  tsConfig: Nothing,
  environment: Nothing,
  timeout: Nothing,
  typeCheck: Nothing,
  watch: Nothing,
  keepAlive: Nothing,
  logLevel: Nothing,
  fuseBoxOptions: Nothing,
  ...options,
})

export const test = describe(`parseCliArgs`, [
  given(`a directory and []`, [
    it(`returns default CliOptions`, ({ equal }) => {
      equal(config(), cli())
    }),
  ]),

  given(`a directory and ['fileGlobs/*']`, [
    it(`returns CliOptions with fileGlobs`, ({ equal }) => {
      const fileGlobs = ['source/**/*.test.ts']

      equal(config({ fileGlobs: Maybe.of(fileGlobs) }), cli(...fileGlobs))
    }),
  ]),

  given(`a directory and ['--config']`, [
    it(`returns CliOptions with default .typed-test.ts config path`, ({ equal }) => {
      const args = ['--config']

      equal(config({ config: Maybe.of(join(directory, '.typed-test.ts')) }), cli(...args))
    }),
  ]),
])
