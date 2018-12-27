import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { fromJust, isJust } from '../../maybe'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { emitToMemory } from '../emitToMemory'
import { findTsConfig } from '../findTsConfig'
import { wrapModuleInFactory } from './wrapModuleInFactory'

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
      const memoryResult = emitToMemory({ directory: testFixtures, sourceFile, project })
      const { js, map } = wrapModuleInFactory(memoryResult)

      ok(js.startsWith(`function (require, module, exports, __typedRequire) {\n`))
      ok(js.endsWith(`\n}`))

      if (isJust(map)) {
        const { mappings } = JSON.parse(fromJust(map))
        // Skips first 3 lines since new factory appended
        ok(mappings.startsWith(';;;'))
      } else {
        throw new Error('Map should always be available')
      }
    }),
  ]),
])
