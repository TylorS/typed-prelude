import { createNodeEnvTransformer, deadIfsTransformer } from '@ts-tools/robotrix'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { ModuleKind } from 'typescript'
import { createImportRemapTransformer } from './createImportRemapTransformer/createImportRemapTransformer'
import { createUnusedExportTransformer } from './createUnusedExportTransformer'
import { findSourceFileDependencies } from './findSourceFileDependencies'
import { findTsConfig } from './findTsConfig'

const effectDirectory = join(__dirname, '../effect')
const effectEntry = join(effectDirectory, 'index.ts')
const tsConfig = findTsConfig({ directory: effectDirectory })

tsConfig.compilerOptions.module = ModuleKind.CommonJS

const project = new Project({ compilerOptions: tsConfig.compilerOptions })
const effectEntrySourceFile = project.addExistingSourceFile(effectEntry)
const { moduleIds, dependencyMap } = findSourceFileDependencies({
  sourceFile: effectEntrySourceFile,
  project,
})

const {} = project.emitToMemory({
  customTransformers: {
    before: [
      createImportRemapTransformer({ tsConfig, moduleIds }),
      createNodeEnvTransformer(process.env),
      deadIfsTransformer,
      createUnusedExportTransformer({ dependencyMap }),
    ],
    after: [],
  },
})
