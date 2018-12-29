import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { emitToMemory } from '../emitToMemory'
import { findTsConfig } from '../findTsConfig'
import { wrapModuleInFactory } from './wrapModuleInFactory'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`wrapModuleInFactory`, [
  given(`a MemoryResult`, [
    it(`returns MemoryResult wrapped in Module Factory`, ({ ok, equal }) => {
      const math = join(testFixtures, 'math.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const project = new Project({
        compilerOptions: { ...tsConfig.compilerOptions, sourceMap: true },
      })
      const sourceFile = project.addExistingSourceFile(math)
      const memoryResult = emitToMemory({
        directory: testFixtures,
        sourceFile,
        project,
        moduleIds: new Map([[math, 0]]),
      })
      const { source: js, map } = wrapModuleInFactory(memoryResult).toStringWithSourceMap({
        file: 'whatever.js',
      })

      const expectedJs = `function (require, module, exports, __typedRequire) {\n"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.add = function (x, y) { return x + y; };\n//# sourceMappingURL=math.js.map\n}`

      equal(expectedJs, js)

      ok(map.mappings.startsWith(';;;'))
    }),
  ]),
])
