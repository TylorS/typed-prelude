import { dirname } from 'path'
import { register } from 'tsconfig-paths'
import { CompilerOptions } from 'typescript'
import { TsConfig } from '../types'
import { transpileNode } from './transpileNode'

export type TypeScriptSupportOptions = {
  cwd: string
  compilerOptions: CompilerOptions
}

/**
 * Very side-effectful
 */
export function installNodeSupport({ configPath, compilerOptions }: TsConfig): () => void {
  const { baseUrl, paths } = compilerOptions

  const tsPathDispose =
    baseUrl && paths
      ? register({
          baseUrl,
          paths,
        })
      : () => void 0

  const tranpilationDispose = transpileNode(dirname(configPath), compilerOptions)

  return () => {
    tsPathDispose()
    tranpilationDispose()
  }
}
