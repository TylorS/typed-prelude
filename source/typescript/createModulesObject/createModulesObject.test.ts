import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { createImportRemapTransformer } from '../createImportRemapTransformer'
import { emitResults } from '../emitResults'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { createModulesObject } from './createModulesObject'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`wrapModuleInFactory`, [
  given(`a MemoryResult`, [
    it(`returns MemoryResult wrapped in Module Factory`, ({ ok }) => {
      const math = join(testFixtures, 'math.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const project = new Project({
        compilerOptions: { ...tsConfig.compilerOptions, sourceMap: true },
      })
      const sourceFile = project.addExistingSourceFile(math)
      const { dependencyMap, moduleIds } = findSourceFileDependencies({ sourceFile, project })
      const results = emitResults({
        directory: testFixtures,
        sourceFiles: Array.from(dependencyMap.values()).map(x => x.sourceFile),
        project,
        transformers: {
          before: [createImportRemapTransformer({ tsConfig, moduleIds })],
        },
      })
      const sourceListMap = createModulesObject({ results, moduleIds })
      const { source: js } = sourceListMap.toStringWithSourceMap({ file: 'whatever.js' })

      ok(js.startsWith(`var modules = {\n`))
      ok(js.endsWith(`\n}`))
    }),
  ]),
])
