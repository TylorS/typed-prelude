import { unwrap } from '@typed/maybe'
import { CliOptions, TestOptions } from './types'

export function cliOptionsToTestOptions(options: CliOptions): TestOptions {
  const config: TestOptions = {}

  unwrap(environment => (config.environment = environment), options.environment)
  unwrap(fileGlobs => (config.fileGlobs = fileGlobs), options.fileGlobs)
  unwrap(fuseBoxOptions => (config.fuseBoxOptions = fuseBoxOptions), options.fuseBoxOptions)
  unwrap(keepAlive => (config.keepAlive = keepAlive), options.keepAlive)
  unwrap(logLevel => (config.logLevel = logLevel), options.logLevel)
  unwrap(timeout => (config.timeout = timeout), options.timeout)
  unwrap(typeCheck => (config.typeCheck = typeCheck), options.typeCheck)
  unwrap(watch => (config.watch = watch), options.watch)

  return config
}
