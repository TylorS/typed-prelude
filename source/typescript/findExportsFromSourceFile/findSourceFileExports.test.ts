import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { SyntaxKind } from 'typescript'
import { createProject } from '../createProject'
import { findTsConfig } from '../findTsConfig'
import { findExportsFromSourceFile } from './findSourceFileExports'

const directory = join(__dirname, 'test-fixtures')

/* TODO:
  Add export * from 'foo'
*/
export const test = describe(`findExportsFromSourceFile`, [
  given(`a SourceFile with exported arrow function`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('arrow-function.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with exported class`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('class.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['Foo'], actual.exportNames)
      equal(SyntaxKind.ClassDeclaration, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with exported function declaration`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('function-declaration.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.FunctionDeclaration, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with exported number literal`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('number.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with exported string literal`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('string.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with exported object literal`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('object-literal.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with default export`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('default-export.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['default'], actual.exportNames)
      equal(SyntaxKind.ExportAssignment, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with identifier`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('identifier.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['foo'], actual.exportNames)
      equal(SyntaxKind.VariableDeclaration, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with { export A as B }`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('export-as.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['bar'], actual.exportNames)
      equal(SyntaxKind.VariableDeclaration, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with default export identifier`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment(
        'default-export-identifier.ts',
      )
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['default'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with default export =`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('export-equal.ts')
      const [actual] = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(['module.export'], actual.exportNames)
      equal(SyntaxKind.VariableStatement, actual.node.kind)
    }),
  ]),

  given(`a SourceFile with multiple export names`, [
    it(`returns all exports`, ({ equal }) => {
      const { sourceFile, typeChecker } = setupFixtureTestEnvironment('multiple-export-names.ts')
      const sourceExports = findExportsFromSourceFile(sourceFile, typeChecker)

      equal(1, sourceExports.length)
      equal(['foo', 'default'], sourceExports[0].exportNames)
      equal(SyntaxKind.VariableStatement, sourceExports[0].node.kind)
    }),
  ]),
])

function setupFixtureTestEnvironment(filePath: string) {
  const tsConfig = findTsConfig({ directory })
  const { getSourceFiles } = createProject({
    directory,
    tsConfig,
    fileGlobs: [filePath],
  })
  const { sourceFiles, program } = getSourceFiles()

  return { sourceFile: sourceFiles[0], typeChecker: program.getTypeChecker() }
}
