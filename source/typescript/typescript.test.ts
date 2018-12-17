import {
  createNodeEnvTransformer,
  createRemapImportsTransformer,
  deadIfsTransformer,
} from '@ts-tools/robotrix'
import { dirname, join } from 'path'
import { sync } from 'resolve'
import Project from 'ts-simple-ast'
import { createMatchPath } from 'tsconfig-paths'
import { CompilerOptions, ModuleKind } from 'typescript'
import { getFileExtensions } from './common/getFileExtensions'
import { createUnusedExportTransformer } from './createUnusedExportTransformer'
import { findSourceFileDependencies } from './findSourceFileDependencies'
import { preferEsModule } from './findSourceFileDependencies/helpers'
import { findTsConfig } from './findTsConfig'

const effectDirectory = join(__dirname, '../effect')
const effectEntry = join(effectDirectory, 'index.ts')
const tsConfig = findTsConfig({ directory: effectDirectory })
const compilerOptions: CompilerOptions = {
  ...tsConfig.compilerOptions,
  module: ModuleKind.CommonJS,
  sourceMap: true,
  importHelpers: true,
}
const project = new Project({ compilerOptions })
const baseUrl = compilerOptions.baseUrl
  ? join(dirname(tsConfig.configPath), compilerOptions.baseUrl)
  : null
const match = baseUrl ? createMatchPath(baseUrl, compilerOptions.paths || {}) : null
const effectEntrySourceFile = project.addExistingSourceFile(effectEntry)
const { moduleIds, dependencyMap } = findSourceFileDependencies({
  sourceFile: effectEntrySourceFile,
  project,
})

const {} = project.emitToMemory({
  customTransformers: {
    before: [
      createRemapImportsTransformer({
        remapTarget(target, containingFile) {
          const path = getResolvedPath(target, containingFile)
          const id = moduleIds.get(path)!
          const value = id ? `${id}` : path

          return value
        },
      }),
      createNodeEnvTransformer(process.env),
      deadIfsTransformer,
      createUnusedExportTransformer({ dependencyMap }),
    ],
    after: [],
  },
})

function getResolvedPath(target: string, containingFile: string): string {
  return (
    (match && match(target)) ||
    sync(target, {
      basedir: dirname(containingFile),
      extensions: getFileExtensions(compilerOptions),
      packageFilter: preferEsModule,
    })
  )
}
