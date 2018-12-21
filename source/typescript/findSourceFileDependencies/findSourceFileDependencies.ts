import { sync } from 'resolve'
import { ImportEqualsDeclaration, Project, SourceFile, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { filePathIsLink } from '../common/filePathIsLink'
import { getFileExtensions } from '../common/getFileExtensions'
import { findSourceFileExports } from '../findSourceFileExports'
import { Dependency, DependencyMap, DependencyType, DependentMap } from '../types'
import { findCommonjsRequireDependency } from './findCommonjsRequireDependency'
import { findDynamicImportDependency } from './findDynamicImportDependency'
import { findImportDeclarationDependency } from './findImportDeclarationDependency'
import { findImportEqualsDependency } from './findImportEqualsDependency'
import {
  findImportNames,
  IMAGE_EXTENSIONS,
  preferEsModule,
  stripModuleSpecifier,
  stripRequireSpecifier,
} from './helpers'

export type FindSourceFileDependenciesOptions = {
  sourceFile: SourceFile
  project: Project
  // File extensions to treat as links
  // Defaults to common web image formats
  linkExtensions?: string[]
}

export function findSourceFileDependencies({
  sourceFile,
  project,
  linkExtensions = IMAGE_EXTENSIONS,
}: FindSourceFileDependenciesOptions): {
  dependencyMap: DependencyMap
  dependentMap: DependentMap
  moduleIds: Map<string, number>
} {
  const dependencyMap: DependencyMap = new Map()
  const dependentMap: DependentMap = new Map()
  const moduleIds = new Map<string, number>()
  const fileIsLink = filePathIsLink(linkExtensions)
  const extensions = getFileExtensions({ ...project.getCompilerOptions(), allowJs: true })
  const sourceFilesToProcess: SourceFile[] = [sourceFile]
  const resolvedFilePathsProcessed: string[] = []

  function addDependent(file: string, dependent: string) {
    const dependents = dependentMap.get(dependent) || []

    dependents.push(file)
    dependentMap.set(dependent, dependents)
  }

  let moduleId = 0

  function getModuleId(filePath: string): number {
    const id = moduleIds.get(filePath)

    if (id) {
      return id
    }

    const newId = moduleId++

    moduleIds.set(filePath, newId)

    return newId
  }

  while (sourceFilesToProcess.length > 0) {
    const sourceFileToProcess = sourceFilesToProcess.shift() as SourceFile
    const filePath = sourceFileToProcess.getFilePath()

    if (resolvedFilePathsProcessed.includes(filePath)) {
      continue
    }

    resolvedFilePathsProcessed.push(filePath)

    const moduleId = getModuleId(filePath)
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
      fileIsLink,
      extensions,
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
  extensions: string[]
  fileIsLink: (path: string) => boolean
  getModuleId: (path: string) => number
}

function findDependenciesOfSourceFile({
  sourceFileToProcess: sourceFile,
  project,
  dependencies,
  sourceFilesToProcess,
  getModuleId,
  fileIsLink,
  extensions,
}: FindDependenciesOfSourceFileOptions): void {
  const sourceFileDecescendants = sourceFile.getDescendants()
  const directory = sourceFile.getDirectoryPath()
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
      const isLink = fileIsLink(dependencyPath)
      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)
      const dependency = findImportDeclarationDependency(
        descendant,
        dependencySourceFile,
        getModuleId,
        isLink,
      )

      dependencies.push(dependency)
      sourceFilesToProcess.push(dependencySourceFile)

      return
    }

    if (TypeGuards.isImportEqualsDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripRequireSpecifier(
        descendant.getModuleReference().getText(),
      )
      const dependencyPath = sync(dependencySourceFileSpecifier, resolveOptions)
      const isLink = fileIsLink(dependencyPath)
      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)
      const dependency = findImportEqualsDependency(
        descendant as ImportEqualsDeclaration,
        dependencySourceFile,
        getModuleId,
        isLink,
      )

      dependencies.push(dependency)
      sourceFilesToProcess.push(dependencySourceFile)

      return
    }

    if (descendant.getKind() === SyntaxKind.ImportKeyword) {
      const importCallExpression = descendant.getParentIfKind(SyntaxKind.CallExpression)

      if (importCallExpression) {
        const dependency = findDynamicImportDependency({
          importCallExpression,
          resolveOptions,
          getModuleId,
        })
        const dependencySourceFile = project.addExistingSourceFile(dependency.resolvedFilePath)

        dependencies.push(dependency)
        sourceFilesToProcess.push(dependencySourceFile)

        return
      }
    }

    if (TypeGuards.isIdentifier(descendant) && descendant.getText() === 'require') {
      const dependency = findCommonjsRequireDependency({
        requireIdentifier: descendant,
        resolveOptions,
        getModuleId,
        isLink: fileIsLink,
      })

      if (dependency) {
        const dependencySourceFile = project.addExistingSourceFile(dependency.resolvedFilePath)

        dependencies.push(dependency)
        sourceFilesToProcess.push(dependencySourceFile)

        return
      }
    }

    if (TypeGuards.isExportDeclaration(descendant)) {
      const moduleSpecifier = descendant.getModuleSpecifier()

      if (moduleSpecifier) {
        const importNames = findImportNames(descendant.getNamedExports())
        const dependencySourceFile = descendant.getModuleSpecifierSourceFileOrThrow()
        const resolvedFilePath = dependencySourceFile.getFilePath()
        const dependency: Dependency = {
          importNames: importNames.length > 0 ? importNames : [['*', '*']],
          moduleSpecifier: stripModuleSpecifier(moduleSpecifier.getText()),
          moduleId: getModuleId(resolvedFilePath),
          resolvedFilePath,
          type: DependencyType.ReExport,
        }

        dependencies.push(dependency)
        sourceFilesToProcess.push(dependencySourceFile)
      }
    }
  }
}
