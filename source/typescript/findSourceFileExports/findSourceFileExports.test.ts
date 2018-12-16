import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project, { TypeGuards } from 'ts-simple-ast'
import { chain } from '../../list'
import { findSourceFileExports } from './findSourceFileExports'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`findSourceFileExports`, [
  given(`a SourceFile with named variable exports`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-variables.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal(
        [
          ['add', 'add'],
          ['subtract', 'subtract'],
          ['multiply', 'multiply'],
          ['divide', 'divide'],
          ['add', 'default'],
        ],
        chain(x => x.exportNames, exportMetadata),
      )

      ok(
        exportMetadata.every(
          x => TypeGuards.isVariableDeclaration(x.node) || TypeGuards.isIdentifier(x.node),
        ),
      )
    }),
  ]),

  given(`a SourceFile with default exports`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'default-export.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['default', 'default']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isArrowFunction(x.node)))
    }),
  ]),

  given(`a SourceFile with export =`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'export-equals.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['module', 'export']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isArrowFunction(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export class declaration`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-class.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['Foo', 'Foo']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isClassDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export enum declaration`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-enum.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['Foo', 'Foo']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isEnumDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export function declarations`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-functions.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['foo', 'foo'], ['bar', 'bar']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isFunctionDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export interface declarations`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-interface.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['Foo', 'Foo']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isInterfaceDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export namespace declarations`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-namespace.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['Foo', 'Foo']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isNamespaceDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with namned export type-alias declaration`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'named-export-type-alias.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['Foo', 'Foo']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isTypeAliasDeclaration(x.node)))
    }),
  ]),

  given(`a SourceFile with commonjs exports.foo =`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'exports-commonjs.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['exports', 'foo'], ['exports', 'bar']], chain(x => x.exportNames, exportMetadata))

      ok(exportMetadata.every(x => TypeGuards.isArrowFunction(x.node)))
    }),
  ]),

  given(`a SourceFile with commonjs module.exports =`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 'module-exports-commonjs.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal([['module', 'exports']], chain(x => x.exportNames, exportMetadata))

      equal("() => 'foo'", exportMetadata[0].node.getText())

      ok(exportMetadata.every(x => TypeGuards.isArrowFunction(x.node)))
    }),
  ]),

  given(`a SourceFile with re-exports`, [
    it(`returns ExportMetadata[]`, ({ equal, ok }) => {
      const filePath = join(testFixtures, 're-exports.ts')
      const project = new Project()
      const sourceFile = project.addExistingSourceFile(filePath)
      const exportMetadata = findSourceFileExports({ sourceFile })

      equal(
        [['add', 'add'], ['subtract', 'subtract'], ['multiply', 'multiply'], ['divide', 'divide']],
        chain(x => x.exportNames, exportMetadata),
      )

      ok(exportMetadata.every(x => TypeGuards.isVariableDeclaration(x.node)))
    }),
  ]),
])
