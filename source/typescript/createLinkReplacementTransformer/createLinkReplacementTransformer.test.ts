import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { findDependenciesOfType } from '../common/findDependenciesOfType'
import { emitToMemory } from '../emitToMemory'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { DependencyType } from '../types'
import { createLinkReplacementTransformer } from './createLinkReplacementTransformer'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`createImportRemapTransformer`, [
  given(`TsConfig and ModuleIds`, [
    it(`returns a transformer that remaps imports`, ({ ok }) => {
      const exampleFile = join(testFixtures, 'example.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const project = new Project({ compilerOptions: tsConfig.compilerOptions })
      const sourceFile = project.addExistingSourceFile(exampleFile)
      const { dependencyMap, moduleIds } = findSourceFileDependencies({
        sourceFile,
        project,
      })
      const linkDependencies = findDependenciesOfType(dependencyMap, DependencyType.Link)
      const transformer = createLinkReplacementTransformer({ linkDependencies, publicPath: '/' })
      const { js } = emitToMemory({
        directory: testFixtures,
        sourceFile,
        project,
        moduleIds,
        transformers: { before: [transformer] },
      })

      ok(js.includes(`var ExampleImage = "/example-image.png"`))
    }),
  ]),
])
