import { extname } from 'path'
import { sync } from 'resolve'
import { ImportEqualsDeclaration, Project, SourceFile, SyntaxKind, TypeGuards } from 'ts-simple-ast'
import { getFileExtensions } from '../common/getFileExtensions'
import { findSourceFileExports } from '../findSourceFileExports'
import { Dependency, DependencyMap, DependentMap } from '../types'
import { findCommonjsRequireDependency } from './findCommonjsRequireDependency'
import { findDynamicImportDependency } from './findDynamicImportDependency'
import {
  findImportDeclarationDependency,
  findImportDeclarationImportNames,
} from './findImportDeclarationDependency'
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
      linkExtensions,
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
  linkExtensions: string[]
}

function findDependenciesOfSourceFile({
  sourceFileToProcess: sourceFile,
  project,
  dependencies,
  sourceFilesToProcess,
  getModuleId,
  linkExtensions,
}: FindDependenciesOfSourceFileOptions): void {
  const sourceFileDecescendants = sourceFile.getDescendants()
  const directory = sourceFile.getDirectoryPath()
  const extensions = getFileExtensions({ ...project.getCompilerOptions(), allowJs: true })
  const fileIsLink = filePathIsLink(linkExtensions)
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

      if (fileIsLink(dependencyPath)) {
        const moduleId = getModuleId(dependencyPath)
        const { importNames } = findImportDeclarationImportNames(descendant)

        dependencies.push({
          moduleSpecifier: dependencySourceFileSpecifier,
          moduleId,
          importNames,
          resolvedFilePath: dependencyPath,
          type: 'link',
        })

        continue
      }

      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)

      sourceFilesToProcess.push(dependencySourceFile)
      findImportDeclarationDependency(descendant, dependencySourceFile, dependencies, getModuleId)
    }

    if (TypeGuards.isImportEqualsDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripRequireSpecifier(
        descendant.getModuleReference().getText(),
      )
      const dependencyPath = sync(dependencySourceFileSpecifier, resolveOptions)

      if (fileIsLink(dependencyPath)) {
        const moduleId = getModuleId(dependencyPath)

        dependencies.push({
          moduleSpecifier: dependencySourceFileSpecifier,
          moduleId,
          importNames: [['require', descendant.getName()]],
          resolvedFilePath: dependencyPath,
          type: 'link',
        })

        continue
      }

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
      const importCallExpression = descendant.getParentIfKind(SyntaxKind.CallExpression)

      if (importCallExpression) {
        findDynamicImportDependency({
          importCallExpression,
          resolveOptions,
          dependencies,
          sourceFilesToProcess,
          project,
          getModuleId,
        })
      }
    }

    if (TypeGuards.isIdentifier(descendant) && descendant.getText() === 'require') {
      findCommonjsRequireDependency({
        requireIdentifier: descendant,
        resolveOptions,
        dependencies,
        sourceFilesToProcess,
        project,
        getModuleId,
        isLink: fileIsLink,
      })
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
          type: 're-export',
        }

        sourceFilesToProcess.push(dependencySourceFile)
        dependencies.push(dependency)
      }
    }
  }
}

function filePathIsLink(linkExtensions: string[]) {
  return (filePath: string) => {
    const extension = withDot(extname(filePath))

    return linkExtensions.map(withDot).some(x => x === extension)
  }
}

function withDot(extension: string) {
  return extension.startsWith('.') ? extension : `.${extension}`
}
