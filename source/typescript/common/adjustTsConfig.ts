import { ModuleKind, ScriptTarget } from 'typescript'
import { TsConfig } from '../types'

// Updates required compilerOptions for bundling purposes
export function adjustTsConfig(tsConfig: TsConfig): TsConfig {
  tsConfig.compilerOptions.allowJs = true
  tsConfig.compilerOptions.noEmitOnError = true
  tsConfig.compilerOptions.module = ModuleKind.CommonJS
  tsConfig.compilerOptions.target = ScriptTarget.ES5
  tsConfig.compilerOptions.declaration = false
  tsConfig.compilerOptions.resolveJsonModule = true

  return tsConfig
}
