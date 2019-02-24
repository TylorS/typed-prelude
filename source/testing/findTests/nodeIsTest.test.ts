import { describe, given, it } from '@typed/test'
import { createProject, findTsConfig } from '@typed/typescript'
import { findFirstChildNode } from '@typed/typescript/common/findFirstChildNode'
import { join } from 'path'
import { nodeIsTest } from './nodeIsTest'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`nodeIsTest`, [
  given(`a Node and a TypeChecker`, [
    it(`returns true when given a Test`, ({ notEqual }) => {
      const tsConfig = findTsConfig({ directory: testFixtures })
      const fileName = join(testFixtures, 'basic-test.fixture-test.ts')
      const project = createProject({ directory: process.cwd(), fileGlobs: [fileName], tsConfig })
      const {
        sourceFiles: [sourceFile],
        typeChecker,
      } = project.getSourceFiles()
      const node = findFirstChildNode(node => nodeIsTest(node, typeChecker), sourceFile)

      notEqual(null, node)
    }),
  ]),
])
