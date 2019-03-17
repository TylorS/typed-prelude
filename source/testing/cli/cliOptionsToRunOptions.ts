import { withDefault } from '@typed/maybe'
import { findTsConfig } from '@typed/typescript'
import { uuid } from '@typed/uuid'
import { LogLevel } from '../types'
import { CliOptions, RunOptions, TestEvironment } from './types'

const EXCLUDE = ['./node_modules/**']

export function cliOptionsToRunOptions(directory: string, cliOptions: CliOptions): RunOptions {
  const tsConfig = findTsConfig({
    directory,
    configFileName: withDefault(void 0, cliOptions.tsConfig),
  })
  const { files = [], include = [], exclude = EXCLUDE } = tsConfig
  const tsConfigFileGlobs = [...files, ...include, ...exclude.map(x => `!${x}`)]
  const fileGlobs = withDefault(tsConfigFileGlobs, cliOptions.fileGlobs)
  const options: RunOptions = {
    testRunId: uuid(),
    fileGlobs,
    tsConfig,
    environment: withDefault(TestEvironment.Node, cliOptions.environment),
    timeout: withDefault(2000, cliOptions.timeout),
    typeCheck: withDefault(false, cliOptions.typeCheck),
    watch: withDefault(false, cliOptions.watch),
    keepAlive: withDefault(false, cliOptions.keepAlive),
    logLevel: withDefault(LogLevel.DEFAULT, cliOptions.logLevel),
    fuseBoxOptions: withDefault({ directory, tsConfig }, cliOptions.fuseBoxOptions),
  }

  return options
}
