import { createRemapImportsTransformer } from '@ts-tools/robotrix'
import { dirname, join } from 'path'
import { sync } from 'resolve'
import { ts } from 'ts-simple-ast'
import { createMatchPath } from 'tsconfig-paths'
import { getFileExtensions } from '../common/getFileExtensions'
import { preferEsModule } from '../findSourceFileDependencies/helpers'
import { TsConfig } from '../types'

export type CreateImportRemapTransformerOptions = {
  tsConfig: TsConfig
  moduleIds: Map<string, number>
}

export function createImportRemapTransformer({
  tsConfig,
  moduleIds,
}: CreateImportRemapTransformerOptions): ts.Transformer<ts.SourceFile> {
  const extensions = getFileExtensions(tsConfig.compilerOptions)
  const baseUrl = tsConfig.compilerOptions.baseUrl
    ? join(dirname(tsConfig.configPath), tsConfig.compilerOptions.baseUrl)
    : null
  const match = baseUrl ? createMatchPath(baseUrl, compilerOptions.paths || {}) : null
  function getResolvedPath(target: string, containingFile: string): string {
    return (
      (match && match(target)) ||
      sync(target, {
        basedir: dirname(containingFile),
        extensions,
        packageFilter: preferEsModule,
      })
    )
  }

  return createRemapImportsTransformer({
    remapTarget(target, containingFile) {
      const path = getResolvedPath(target, containingFile)
      const id = moduleIds.get(path)!
      const value = id ? `${id}` : path

      return value
    },
  })
}
