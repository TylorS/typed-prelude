import { describe, given, it } from '@typed/test'
import { createProject, findTsConfig } from '@typed/typescript'
import { join } from 'path'
import { findTests } from './findTests'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`findTests`, [
  given(`a SourceFile with it() Test and TypeChecker`, [
    it(`returns TestMetadata[]`, ({ equal }) => {
      const tsConfig = findTsConfig({ directory: testFixtures })
      const fileName = join(testFixtures, 'basic-test.fixture-test.ts')
      const project = createProject({ directory: process.cwd(), fileGlobs: [fileName], tsConfig })
      const {
        sourceFiles: [sourceFile],
        typeChecker,
      } = project.getSourceFiles()
      const [passing, failing] = findTests(sourceFile, typeChecker)

      equal(
        "export const basicPassingTest = it('Is Basic (Passing)', ({ ok }) => ok(true))",
        passing.text,
      )

      equal(
        "export const basicFailingTest = it('Is Basic (Failing)', ({ ok }) => ok(false))",
        failing.text,
      )
    }),
  ]),

  given(`a SourceFile with TestCollection and TypeChecker`, [
    it(`returns TestMetadata[]`, ({ equal }) => {
      const tsConfig = findTsConfig({ directory: testFixtures })
      const fileName = join(testFixtures, 'test-collection.fixture-test.ts')
      const project = createProject({ directory: process.cwd(), fileGlobs: [fileName], tsConfig })
      const {
        sourceFiles: [sourceFile],
        typeChecker,
      } = project.getSourceFiles()
      const [describeMetadata] = findTests(sourceFile, typeChecker)
      const {
        additionalTests: [givenMetadata],
      } = describeMetadata
      const {
        additionalTests: [itMetadata],
      } = givenMetadata

      equal(5, describeMetadata.startLine)
      equal(12, describeMetadata.endLine)
      equal(
        "export const testCollection = describe('add', [\n  given('2 and 2', [\n    it('returns 4', ({ equal }) => {\n      equal(4, add(2, 2))\n    }),\n  ]),\n])",
        describeMetadata.text,
      )

      equal(6, givenMetadata.startLine)
      equal(11, givenMetadata.endLine)
      equal(
        "given('2 and 2', [\n    it('returns 4', ({ equal }) => {\n      equal(4, add(2, 2))\n    }),\n  ])",
        givenMetadata.text,
      )

      equal(7, itMetadata.startLine)
      equal(10, itMetadata.endLine)
      equal("it('returns 4', ({ equal }) => {\n      equal(4, add(2, 2))\n    })", itMetadata.text)
    }),
  ]),
])
