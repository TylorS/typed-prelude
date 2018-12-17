import { sync } from 'resolve'
import { ImportEqualsDeclaration, Project, SourceFile, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { getFileExtensions } from '../common/getFileExtensions'
import { findSourceFileExports } from '../findSourceFileExports'
import { Dependency, DependencyMap, DependentMap } from '../types'
import { findCommonjsRequireDependency } from './findCommonjsRequireDependency'
import { findDynamicImportDependency } from './findDynamicImportDependency'
import { findImportDeclarationDependency } from './findImportDeclarationDependency'
import { findImportEqualsDependency } from './findImportEqualsDependency'
import { findImportNames, preferEsModule, stripModuleSpecifier } from './helpers'

export type FindSourceFileDependenciesOptions = {
  sourceFile: SourceFile
  project: Project
}

export function findSourceFileDependencies({
  sourceFile,
  project,
}: FindSourceFileDependenciesOptions): {
  dependencyMap: DependencyMap
  dependentMap: DependentMap
  moduleIds: Map<string, number>
} {
  const dependencyMap: DependencyMap = new Map()
  const dependentMap: DependentMap = new Map()
  let moduleId = 0
  const moduleIds = new Map<string, number>()
  const sourceFilesToProcess = [sourceFile]
  const resolvedFilePathsProcessed: string[] = []

  function addDependent(file: string, dependent: string) {
    const dependents = dependentMap.get(dependent) || []

    dependents.push(file)
    dependentMap.set(dependent, dependents)
  }

  function getModuleId(filePath: string): number {
    const id = moduleIds.get(filePath)

    if (id) {
      return id
    }

    const newId = ++moduleId

    moduleIds.set(filePath, newId)

    return newId
  }

  while (sourceFilesToProcess.length > 0) {
    const sourceFileToProcess = sourceFilesToProcess.shift() as SourceFile
    const filePath = sourceFileToProcess.getFilePath()

    if (resolvedFilePathsProcessed.includes(filePath)) {
      continue
    }

    const moduleId = getModuleId(filePath)
    resolvedFilePathsProcessed.push(filePath)

    const dependencies: Dependency[] = []
    const exportMetadata = findSourceFileExports({ sourceFile: sourceFileToProcess })

    dependencyMap.set(filePath, {
      sourceFile: sourceFileToProcess,
      moduleId,
      exportMetadata,
      dependencies,
    })

    findDependenciesOfSourceFile({
      project,
      dependencies,
      sourceFileToProcess,
      sourceFilesToProcess,
      getModuleId,
    })

    dependencies.forEach(dependency => addDependent(filePath, dependency.resolvedFilePath))
  }

  return {
    dependencyMap,
    dependentMap,
    moduleIds,
  }
}

type FindDependenciesOfSourceFileOptions = {
  project: Project
  sourceFileToProcess: SourceFile
  sourceFilesToProcess: SourceFile[]
  dependencies: Dependency[]
  getModuleId: (path: string) => number
}

function findDependenciesOfSourceFile({
  sourceFileToProcess: sourceFile,
  project,
  dependencies,
  sourceFilesToProcess,
  getModuleId,
}: FindDependenciesOfSourceFileOptions): void {
  const sourceFileDecescendants = sourceFile.getDescendants()
  const directory = sourceFile.getDirectoryPath()
  const extensions = getFileExtensions({ ...project.getCompilerOptions(), allowJs: true })
  const resolveOptions = {
    basedir: directory,
    extensions,
    packageFilter: preferEsModule,
  }

  for (const descendant of sourceFileDecescendants) {
    if (TypeGuards.isImportDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripModuleSpecifier(
        descendant.getModuleSpecifier().getText(),
      )
      const dependencyPath = sync(dependencySourceFileSpecifier, resolveOptions)
      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)

      sourceFilesToProcess.push(dependencySourceFile)
      findImportDeclarationDependency(descendant, dependencySourceFile, dependencies, getModuleId)
    }

    if (TypeGuards.isImportEqualsDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripModuleSpecifier(descendant.getName())
      const dependencyPath = sync(dependencySourceFileSpecifier, resolveOptions)
      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)

      sourceFilesToProcess.push(dependencySourceFile)

      findImportEqualsDependency(
        descendant as ImportEqualsDeclaration,
        dependencySourceFile,
        dependencies,
        getModuleId,
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
          getModuleId,
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
        getModuleId,
      )
    }

    if (TypeGuards.isExportDeclaration(descendant)) {
      const moduleSpecifier = descendant.getModuleSpecifier()

      if (moduleSpecifier) {
        const importNames = findImportNames(descendant.getNamedExports())
        const dependencySourceFile = descendant.getModuleSpecifierSourceFileOrThrow()
        const resolvedFilePath = dependencySourceFile.getFilePath()

        const dependency: Dependency = {
          importNames: importNames.length > 0 ? importNames : [['*', '*']],
          moduleSpecifier: moduleSpecifier.getText(),
          moduleId: getModuleId(resolvedFilePath),
          resolvedFilePath,
          type: 're-export',
        }

        sourceFilesToProcess.push(dependencySourceFile)
        dependencies.push(dependency)
      }
    }
  }
}
