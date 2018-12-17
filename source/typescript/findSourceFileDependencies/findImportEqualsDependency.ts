import { ImportEqualsDeclaration, SourceFile } from 'ts-simple-ast'
import { Dependency } from '../types'
import { stripRequireSpecifier } from './helpers'

export function findImportEqualsDependency(
  importEqualsDeclaration: ImportEqualsDeclaration,
  dependencySourceFile: SourceFile,
  dependencies: Dependency[],
  getModuleId: (filePath: string) => number,
) {
  const moduleSpecifier = stripRequireSpecifier(
    importEqualsDeclaration.getModuleReference().getText(),
  )
  const resolvedFilePath = dependencySourceFile.getFilePath()
  const moduleId = getModuleId(resolvedFilePath)
  const dependency: Dependency = {
    moduleSpecifier,
    moduleId,
    importNames: [['require', 'math']],
    resolvedFilePath,
    type: 'import-require',
  }

  dependencies.push(dependency)
}
