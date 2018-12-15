import { ImportEqualsDeclaration, SourceFile } from 'ts-simple-ast'
import { Dependency } from '../types'
import { stripRequireSpecifier } from './helpers'

export function findImportEqualsDependency(
  importEqualsDeclaration: ImportEqualsDeclaration,
  dependencySourceFile: SourceFile,
  dependencies: Dependency[],
) {
  const moduleSpecifier = stripRequireSpecifier(
    importEqualsDeclaration.getModuleReference().getText(),
  )
  const resolvedFilePath = dependencySourceFile.getFilePath()
  const dependency: Dependency = {
    type: 'import-require',
    importNames: [['require', 'math']],
    resolvedFilePath,
    moduleSpecifier,
  }

  dependencies.push(dependency)
}
