import {
  convertCompilerOptionsFromJson,
  findConfigFile,
  parseConfigFileTextToJson,
  sys,
} from 'typescript'
import { diagnosticsToString } from './common/diagnosticsToString'
import { TsConfig } from './types'

const TS_CONFIG =
  typeof process !== 'undefined'
    ? process.env.TYPED_TEST_TS_CONFIG || 'tsconfig.json'
    : 'tsconfig.json'

export type FindTsConfigOptions = {
  directory: string
  configFileName?: string
}

export function findTsConfig({
  directory,
  configFileName = TS_CONFIG,
}: FindTsConfigOptions): TsConfig {
  const configPath = findConfigFile(directory, sys.fileExists, configFileName)

  if (!configPath) {
    throw new Error(`Unable to find ${configFileName} from ${directory}`)
  }

  const configContents = sys.readFile(configPath) as string
  const { config } = parseConfigFileTextToJson(configPath, configContents)
  const { compilerOptions: unparsedCompilerOptions } = config
  const { options: compilerOptions, errors } = convertCompilerOptionsFromJson(
    unparsedCompilerOptions,
    directory,
    TS_CONFIG,
  )

  if (errors && errors.length > 0) {
    throw new Error(diagnosticsToString(errors, directory))
  }

  return { ...config, compilerOptions, configPath }
}
