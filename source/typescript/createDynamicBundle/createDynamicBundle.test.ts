import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { emitToMemory } from '../emitToMemory'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { createDynamicBundle } from './createDynamicBundle'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`createDynamicBundle`, [
  given(`a file name and a list of results`, [
    it(`returns a dynamic bundle`, ({ equal }) => {
      const filePath = join(testFixtures, 'add.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const project = new Project({ compilerOptions: tsConfig.compilerOptions })
      const sourceFile = project.addExistingSourceFile(filePath)
      const { moduleIds } = findSourceFileDependencies({ sourceFile, project })
      const result = emitToMemory({ directory: testFixtures, sourceFile, project, moduleIds })

      const expected = `(window.typedJsonp = window.typedJsonp || []).push([function (require, module, exports, __typedRequire) {\n"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.add = function (x, y) { return x + y; };\n//# sourceMappingURL=add.js.map\n},0]);`
      const { source } = createDynamicBundle({ fileName: 'dynamic.js', results: [result] })

      equal(expected, source)
    }),
  ]),
])
