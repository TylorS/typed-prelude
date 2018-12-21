import { ImportEqualsDeclaration, SourceFile } from 'ts-simple-ast'
import { Dependency, DependencyType } from '../types'
import { stripRequireSpecifier } from './helpers'

export function findImportEqualsDependency(
  importEqualsDeclaration: ImportEqualsDeclaration,
  dependencySourceFile: SourceFile,
  getModuleId: (filePath: string) => number,
  isLink: boolean,
) {
  const moduleSpecifier = stripRequireSpecifier(
    importEqualsDeclaration.getModuleReference().getText(),
  )
  const name = importEqualsDeclaration.getName()
  const resolvedFilePath = dependencySourceFile.getFilePath()
  const moduleId = getModuleId(resolvedFilePath)
  const dependency: Dependency = {
    moduleSpecifier,
    moduleId,
    importNames: [['require', name]],
    resolvedFilePath,
    type: isLink ? DependencyType.Link : DependencyType.ImportRequire,
  }

  return dependency
}
