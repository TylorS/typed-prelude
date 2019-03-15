import { Maybe, withDefault } from '@typed/maybe'
import { CliOptions, TestConfig } from './types'

export function mergeTestConfigAndCliOptions(
  testConfig: TestConfig,
  cliOptions: CliOptions,
): CliOptions {
  const fileGlobs = withDefault(testConfig.fileGlobs, cliOptions.fileGlobs)
  const environment = withDefault(testConfig.environment, cliOptions.environment)
  const timeout = withDefault(testConfig.timeout, cliOptions.timeout)
  const typeCheck = withDefault(testConfig.typeCheck, cliOptions.typeCheck)
  const watch = withDefault(testConfig.watch, cliOptions.watch)
  const keepAlive = withDefault(testConfig.keepAlive, cliOptions.keepAlive)
  const logLevel = withDefault(testConfig.logLevel, cliOptions.logLevel)

  const config: CliOptions = {
    fileGlobs: Maybe.of(fileGlobs),
    config: cliOptions.config,
    tsConfig: cliOptions.tsConfig,
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
