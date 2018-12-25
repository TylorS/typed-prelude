import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { generateDynamicImportPaths } from '../common/generateDynamicImportPaths'
import { getHash } from '../common/getHash'
import { createImportRemapTransformer } from '../createImportRemapTransformer'
import { emitToMemory } from '../emitToMemory'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { createDynamicImportTransformer } from './createDynamicImportTransformer'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`createImportRemapTransformer`, [
  given(`TsConfig and ModuleIds`, [
    it(`returns a transformer that remaps imports`, ({ ok }) => {
      const exampleFile = join(testFixtures, 'example.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const bundleHash = getHash()
      const project = new Project({ compilerOptions: tsConfig.compilerOptions })
      const sourceFile = project.addExistingSourceFile(exampleFile)
      const { dependencyMap, moduleIds, moduleIdToFilePaths } = findSourceFileDependencies({
        sourceFile,
        project,
      })
      const dynamicImportDependencies = generateDynamicImportPaths({
        dependencyMap,
        publicPath: '/',
        bundleHash,
      })

      const fileName = `/math.${bundleHash}.js`
      // control output name
      dynamicImportDependencies[moduleIdToFilePaths.get(1)!] = fileName

      const transformer = createDynamicImportTransformer({
        dynamicImportDependencies,
        moduleIdToFilePaths,
        publicPath: '/',
      })
      const { js } = emitToMemory({
        directory: testFixtures,
        sourceFile,
        project,
        transformers: {
          before: [createImportRemapTransformer({ tsConfig, moduleIds }), transformer],
        },
      })

      ok(js.includes(`__typedRequire("${fileName}")`))
    }),
  ]),
])
