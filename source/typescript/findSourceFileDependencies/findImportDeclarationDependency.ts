import { ImportDeclaration, SourceFile } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findImportNames } from './helpers'

export function findImportDeclarationDependency(
  importDeclaration: ImportDeclaration,
  dependencySourceFile: SourceFile,
  dependencies: Dependency[],
  getModuleId: (filePath: string) => number,
) {
  const resolvedFilePath = dependencySourceFile.getFilePath()
  const moduleSpecifier = importDeclaration.getModuleSpecifier().getText()
  const namespaceImport = importDeclaration.getNamespaceImport()
  const moduleId = getModuleId(resolvedFilePath)

  if (namespaceImport) {
    const dependency: Dependency = {
      moduleSpecifier,
      moduleId,
      importNames: [['*', 'math']],
      resolvedFilePath,
      type: 'namespace',
    }

    return dependencies.push(dependency)
  }

  const defaultImport = importDeclaration.getDefaultImport()
  const namedImports = importDeclaration.getNamedImports()
  const importNames = findImportNames(namedImports)

  const dependency: Dependency = {
    moduleSpecifier,
    moduleId,
    importNames: defaultImport
      ? [['default', defaultImport.getText()], ...importNames]
      : importNames,
    resolvedFilePath,
    type: 'named',
  }

  dependencies.push(dependency)
}
