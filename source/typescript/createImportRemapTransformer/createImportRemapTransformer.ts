import { createRemapImportsTransformer } from '@ts-tools/robotrix'
import { dirname, join } from 'path'
import { sync } from 'resolve'
import { ts } from 'ts-simple-ast'
import { createMatchPath } from 'tsconfig-paths'
import { sys } from 'typescript'
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
}: CreateImportRemapTransformerOptions): ts.TransformerFactory<ts.SourceFile> {
  const extensions = getFileExtensions(tsConfig.compilerOptions)
  const baseUrl = tsConfig.compilerOptions.baseUrl
    ? join(dirname(tsConfig.configPath), tsConfig.compilerOptions.baseUrl)
    : null
  const match = baseUrl
    ? createMatchPath(baseUrl, tsConfig.compilerOptions.paths || {}, [
        'module',
        'jsnext:main',
        'browser',
        'main',
      ])
    : null
  function getResolvedPath(target: string, containingFile: string): string {
    const hasMatch = match && match(target, sys.readFile, sys.fileExists, extensions)

    if (hasMatch) {
      return hasMatch
    }

    try {
      return sync(target, {
        basedir: dirname(containingFile),
        extensions,
        packageFilter: preferEsModule,
      })
    } catch {
      return target
    }
  }

  return createRemapImportsTransformer({
    remapTarget(target, containingFile) {
      const path = getResolvedPath(target, containingFile)
      const id = moduleIds.get(path)
      const value = id !== undefined ? `${id}` : path

      return value
    },
  })
}
