import { map, withDefault } from '@typed/maybe'
import { findTsConfig, installNodeSupport } from '@typed/typescript'
import { cliOptionsToRunOptions } from './cliOptionsToRunOptions'
import { cliOptionsToTestOptions } from './cliOptionsToTestOptions'
import { findTestOptions } from './findTestOptions'
import { mergeTestConfigAndCliOptions } from './mergeTestConfigAndCliOptions'
import { parseCliArgs } from './parseCliArgs'
import { RunOptions } from './types'

export function findRunOptions(directory: string, args: string[]): RunOptions[] {
  const cliOptions = parseCliArgs({ directory, args })
  const tsConfig = findTsConfig({
    directory,
    configFileName: withDefault(void 0, cliOptions.tsConfig),
  })

  installNodeSupport({ directory, compilerOptions: tsConfig.compilerOptions })

  const testConfigs = withDefault(
    [cliOptionsToTestOptions(cliOptions)],
    map(config => findTestOptions(directory, config), cliOptions.config),
  )
  const runOptions = testConfigs.map(testConfig =>
    cliOptionsToRunOptions(directory, mergeTestConfigAndCliOptions(testConfig, cliOptions)),
  )

  return runOptions
}
