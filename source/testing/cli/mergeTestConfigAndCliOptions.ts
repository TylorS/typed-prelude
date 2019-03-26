import { Maybe, withDefault } from '@typed/maybe'
import { CliOptions, TestOptions } from './types'

export function mergeTestConfigAndCliOptions(
  testConfig: TestOptions,
  cliOptions: CliOptions,
): CliOptions {
  const fileGlobs = withDefault(testConfig.fileGlobs, cliOptions.fileGlobs)
  const environment = withDefault(testConfig.environment, cliOptions.environment)
  const timeout = withDefault(testConfig.timeout, cliOptions.timeout)
  const typeCheck = withDefault(testConfig.typeCheck, cliOptions.typeCheck)
  const watch = withDefault(testConfig.watch, cliOptions.watch)
  const keepAlive = withDefault(testConfig.keepAlive, cliOptions.keepAlive)
  const logLevel = withDefault(testConfig.logLevel, cliOptions.logLevel)
  const tsConfig = withDefault(testConfig.tsConfig, cliOptions.tsConfig)

  const config: CliOptions = {
    fileGlobs: Maybe.of(fileGlobs),
    config: cliOptions.config,
    tsConfig: Maybe.of(tsConfig),
    environment: Maybe.of(environment),
    timeout: Maybe.of(timeout),
    typeCheck: Maybe.of(typeCheck),
    watch: Maybe.of(watch),
    keepAlive: Maybe.of(keepAlive),
    logLevel: Maybe.of(logLevel),
    fuseBoxOptions: Maybe.of(testConfig.fuseBoxOptions),
  }

  return config
}
