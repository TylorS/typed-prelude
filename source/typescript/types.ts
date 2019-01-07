import { CompilerOptions } from 'typescript'

export interface TsConfig {
  compilerOptions: CompilerOptions
  configPath: string
  extends?: string | string[]
  files?: string[]
  include?: string[]
  exclude?: string[]
}
