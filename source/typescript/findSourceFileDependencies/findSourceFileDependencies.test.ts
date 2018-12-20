import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { Project } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findSourceFileDependencies } from './findSourceFileDependencies'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`findSourceFileDependencies`, [
  given(`a SourceFile with named import declarations`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'named-imports.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['default', 'add'], ['multiply', 'multiply']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'named',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with dynamic imports`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'dynamic-import.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['add', 'add']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'dynamic-import',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with destructured dynamic imports`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'dynamic-import-destructured.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['add', 'add2'], ['multiply', 'multiply']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'dynamic-import',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with namespace imports`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'namespace-import.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['*', 'math']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'namespace',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with import require`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'import-require.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['require', 'math']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'import-require',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with commonjs require`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'commonjs.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['math', 'math']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 'commonjs-require',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with export * from`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 're-exports.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './math',
        moduleId: 2,
        importNames: [['*', '*']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/math.ts',
        type: 're-export',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),

  given(`a SourceFile with link import`, [
    it(`returns it's dependencies`, ({ equal }) => {
      const project = new Project()
      const filePath = join(testFixtures, 'image-import.ts')
      const sourceFile = project.addExistingSourceFile(filePath)
      const { dependencyMap } = findSourceFileDependencies({ sourceFile, project })

      const expected: Dependency = {
        moduleSpecifier: './example-image.png',
        moduleId: 2,
        importNames: [['default', 'ExampleImage']],
        resolvedFilePath:
          '/Users/tylors/code/tylors/typed-prelude-next/source/typescript/findSourceFileDependencies/test-fixtures/example-image.png',
        type: 'link',
      }

      equal([expected], dependencyMap.get(filePath)!.dependencies)
    }),
  ]),
])
