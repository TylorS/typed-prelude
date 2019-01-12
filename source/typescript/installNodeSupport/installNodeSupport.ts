import { register } from 'tsconfig-paths'
import { CompilerOptions } from 'typescript'
import { transpileNode } from './transpileNode'

export type TypeScriptSupportOptions = {
  directory: string
  compilerOptions: CompilerOptions
  assertionSupport?: boolean
}

/**
 * Very side-effectful
 */
export function installNodeSupport({
  directory,
  compilerOptions,
  assertionSupport = false,
}: TypeScriptSupportOptions): () => void {
  const { baseUrl, paths } = compilerOptions

  const tsPathDispose =
    baseUrl && paths
      ? register({
          baseUrl,
          paths,
        })
      : () => void 0

  const tranpilationDispose = transpileNode(directory, compilerOptions, assertionSupport)

  return () => {
    tsPathDispose()
    tranpilationDispose()
  }
}
