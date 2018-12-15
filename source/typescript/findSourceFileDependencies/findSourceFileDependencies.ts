import { ImportEqualsDeclaration, Project, SourceFile, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { getFileExtensions } from '../common/getFileExtensions'
import { Dependency, DependencyMap, DependentMap } from '../types'
import { findCommonjsRequireDependency } from './findCommonjsRequireDependency'
import { findDynamicImportDependency } from './findDynamicImportDependency'
import { findImportDeclarationDependency } from './findImportDeclarationDependency'
import { findImportEqualsDependency } from './findImportEqualsDependency'

export type FindSourceFileDependenciesOptions = {
  sourceFile: SourceFile
  project: Project
  recursive?: boolean
}

export function findSourceFileDependencies({
  sourceFile,
  project,
  recursive = true,
}: FindSourceFileDependenciesOptions): [DependencyMap, DependentMap] {
  const dependencyMap: DependencyMap = new Map()
  const dependentMap: DependentMap = new Map()
  const sourceFilesToProcess = [sourceFile]
  const resolvedFilePathsProcessed: string[] = []

  function addDependent(file: string, dependent: string) {
    const dependents = dependentMap.get(dependent) || []

    dependents.push(file)
    dependentMap.set(dependent, dependents)
  }

  while (sourceFilesToProcess.length > 0) {
    const sourceFileToProcess = sourceFilesToProcess.shift() as SourceFile
    const filePath = sourceFileToProcess.getFilePath()

    if (resolvedFilePathsProcessed.includes(filePath)) {
      continue
    }

    resolvedFilePathsProcessed.push(filePath)

    const dependencies: Dependency[] = []

    dependencyMap.set(filePath, dependencies)

    findDependenciesOfSourceFile({
      project,
      dependencies,
      sourceFileToProcess,
      sourceFilesToProcess,
      recursive,
    })

    dependencies.forEach(dependency => addDependent(filePath, dependency.resolvedFilePath))
  }

  return [dependencyMap, dependentMap]
}

type FindDependenciesOfSourceFileOptions = {
  project: Project
  sourceFileToProcess: SourceFile
  sourceFilesToProcess: SourceFile[]
  dependencies: Dependency[]
  recursive: boolean
}

function findDependenciesOfSourceFile({
  sourceFileToProcess: sourceFile,
  project,
  dependencies,
  sourceFilesToProcess,
  recursive,
}: FindDependenciesOfSourceFileOptions): void {
  const sourceFileDecescendants = sourceFile.getDescendants()
  const directory = sourceFile.getDirectoryPath()
  const extensions = getFileExtensions({ ...project.getCompilerOptions(), allowJs: true })
  const resolveOptions = {
    basedir: directory,
    extensions,
  }

  for (const descendant of sourceFileDecescendants) {
    if (TypeGuards.isImportDeclaration(descendant)) {
      const dependencySourceFile = descendant.getModuleSpecifierSourceFileOrThrow()

      if (recursive) {
        sourceFilesToProcess.push(dependencySourceFile)
      }

      findImportDeclarationDependency(descendant, dependencySourceFile, dependencies)
    }

    if (TypeGuards.isImportEqualsDeclaration(descendant)) {
      const dependencySourceFile = descendant.getExternalModuleReferenceSourceFileOrThrow()

      if (recursive) {
        sourceFilesToProcess.push(dependencySourceFile)
      }

      findImportEqualsDependency(
        descendant as ImportEqualsDeclaration,
        dependencySourceFile,
        dependencies,
      )
    }

    if (descendant.getKind() === SyntaxKind.ImportKeyword) {
      const callExpression = descendant.getParentIfKind(SyntaxKind.CallExpression)

      if (callExpression) {
        findDynamicImportDependency(
          callExpression,
          resolveOptions,
          dependencies,
          sourceFilesToProcess,
          project,
          recursive,
        )
      }
    }

    if (TypeGuards.isIdentifier(descendant) && descendant.getText() === 'require') {
      findCommonjsRequireDependency(
        descendant,
        resolveOptions,
        dependencies,
        sourceFilesToProcess,
        project,
        recursive,
      )
    }
  }
}
