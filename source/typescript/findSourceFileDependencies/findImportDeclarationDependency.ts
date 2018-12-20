import { Tuple } from 'source/tuple'
import { ImportDeclaration, SourceFile } from 'ts-simple-ast'
import { Dependency, DependencyType } from '../types'
import { findImportNames, stripModuleSpecifier } from './helpers'

export function findImportDeclarationDependency(
  importDeclaration: ImportDeclaration,
  dependencySourceFile: SourceFile,
  dependencies: Dependency[],
  getModuleId: (filePath: string) => number,
) {
  const resolvedFilePath = dependencySourceFile.getFilePath()
  const moduleSpecifier = stripModuleSpecifier(importDeclaration.getModuleSpecifier().getText())
  const moduleId = getModuleId(resolvedFilePath)
  const { importNames, type } = findImportDeclarationImportNames(importDeclaration)

  const dependency: Dependency = {
    moduleSpecifier,
    moduleId,
    resolvedFilePath,
    importNames,
    type,
  }

  dependencies.push(dependency)
}

export function findImportDeclarationImportNames(
  importDeclaration: ImportDeclaration,
): {
  importNames: Array<Tuple<string>>
  type: DependencyType
} {
  const namespaceImport = importDeclaration.getNamespaceImport()

  if (namespaceImport) {
    const importNames: Array<Tuple<string>> = [['*', namespaceImport.getText()]]

    return { importNames, type: 'namespace' }
  }

  const defaultImport = importDeclaration.getDefaultImport()
  const namedImports = importDeclaration.getNamedImports()
  const namedImportNames = findImportNames(namedImports)
  const importNames: Array<Tuple<string>> = defaultImport
    ? [['default', defaultImport.getText()], ...namedImportNames]
    : namedImportNames

  return { importNames, type: 'named' }
}
