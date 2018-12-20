import { createNodeEnvTransformer, deadIfsTransformer } from '@ts-tools/robotrix'
import { join } from 'path'
import Project, { MemoryEmitResult, SourceFile } from 'ts-simple-ast'
import { ModuleKind } from 'typescript'
import { traverseDependencyMap } from './common/traverseDependencyMap'
import { createImportRemapTransformer } from './createImportRemapTransformer/createImportRemapTransformer'
import { createUnusedExportTransformer } from './createUnusedExportTransformer'
import { findSourceFileDependencies } from './findSourceFileDependencies'
import { findTsConfig } from './findTsConfig'
import { TsConfig } from './types'

const effectDirectory = join(__dirname, '../effect')
const effectEntry = join(effectDirectory, 'index.ts')
const tsConfig = adjustTsConfig(findTsConfig({ directory: effectDirectory }))
const project = new Project({ compilerOptions: tsConfig.compilerOptions })
const effectEntrySourceFile = project.addExistingSourceFile(effectEntry)
const { moduleIds, dependencyMap } = findSourceFileDependencies({
  sourceFile: effectEntrySourceFile,
  project,
})

const results = new Map<string, MemoryEmitResult>()

traverseDependencyMap(
  ({ sourceFile }) => {
    results.set(sourceFile.getFilePath(), emitToMemory(sourceFile))
  },
  effectEntrySourceFile,
  dependencyMap,
)

function emitToMemory(sourceFile: SourceFile) {
  return project.emitToMemory({
    targetSourceFile: sourceFile,
    customTransformers: {
      before: [
        createImportRemapTransformer({ tsConfig, moduleIds }),
        createUnusedExportTransformer({ dependencyMap }),
        createNodeEnvTransformer(process.env),
        deadIfsTransformer,
      ],
    },
  })
}

function adjustTsConfig(tsConfig: TsConfig): TsConfig {
  tsConfig.compilerOptions.module = ModuleKind.CommonJS

  return tsConfig
}
