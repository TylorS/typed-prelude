import {
  ImportEqualsDeclaration,
  Node,
  Project,
  SourceFile,
  SyntaxKind,
  TypeGuards,
} from 'ts-simple-ast'
import { filePathIsLink } from '../common/filePathIsLink'
import { getFileExtensions } from '../common/getFileExtensions'
import { resolvePkg } from '../common/resolvePkg'
import { withDot } from '../common/withDot'
import { findExportMetadata } from '../findSourceFileExports/findExportMetadata'
import { isCommonjsExportExpression } from '../findSourceFileExports/isCommonJsExportExpression'
import { Dependency, DependencyMap, DependencyType, DependentMap, ExportMetadata } from '../types'
import { findCommonjsRequireDependency } from './findCommonjsRequireDependency'
import { findDynamicImportDependency } from './findDynamicImportDependency'
import {
  findImportDeclarationDependency,
  findImportDeclarationImportNames,
} from './findImportDeclarationDependency'
import { findImportEqualsDependency } from './findImportEqualsDependency'
import {
  findImportNames,
  findVariableNameOfCallExpression,
  IMAGE_EXTENSIONS,
  isBuiltin,
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

export async function findSourceFileDependencies({
  sourceFile,
  project,
  linkExtensions = IMAGE_EXTENSIONS,
}: FindSourceFileDependenciesOptions): Promise<{
  dependencyMap: DependencyMap
  dependentMap: DependentMap
  moduleIds: Map<string, number>
  moduleIdToFilePaths: Map<number, string>
}> {
  linkExtensions = linkExtensions.map(withDot)

  const dependencyMap: DependencyMap = new Map()
  const dependentMap: DependentMap = new Map()
  const moduleIds = new Map<string, number>()
  const moduleIdToFilePaths = new Map<number, string>()
  const fileIsLink = filePathIsLink(linkExtensions)
  const extensions = getFileExtensions({ ...project.getCompilerOptions(), allowJs: true }).concat(
    linkExtensions,
  )
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
    moduleIdToFilePaths.set(newId, filePath)

    return newId
  }

  let id = 0
  while (sourceFilesToProcess.length > 0) {
    const sourceFileToProcess = sourceFilesToProcess.shift() as SourceFile
    const filePath = sourceFileToProcess.getFilePath()

    if (resolvedFilePathsProcessed.includes(filePath)) {
      continue
    }

    console.log(++id, filePath)
    resolvedFilePathsProcessed.push(filePath)

    const moduleId = getModuleId(filePath)
    const dependencies: Dependency[] = []
    const exportMetadata: ExportMetadata[] = []

    dependencyMap.set(filePath, {
      sourceFile: sourceFileToProcess,
      moduleId,
      exportMetadata,
      dependencies,
    })

    await findDependenciesOfSourceFile({
      project,
      dependencies,
      sourceFileToProcess,
      sourceFilesToProcess,
      getModuleId,
      fileIsLink,
      extensions,
      exportMetadata,
    })

    dependencies.forEach(dependency => addDependent(filePath, dependency.resolvedFilePath))
  }

  return {
    dependencyMap,
    dependentMap,
    moduleIds,
    moduleIdToFilePaths,
  }
}

type FindDependenciesOfSourceFileOptions = {
  project: Project
  sourceFileToProcess: SourceFile
  sourceFilesToProcess: SourceFile[]
  dependencies: Dependency[]
  extensions: string[]
  exportMetadata: ExportMetadata[]
  fileIsLink: (path: string) => boolean
  getModuleId: (path: string) => number
}

async function findDependenciesOfSourceFile({
  sourceFileToProcess: sourceFile,
  project,
  dependencies,
  sourceFilesToProcess,
  getModuleId,
  fileIsLink,
  extensions,
  exportMetadata,
}: FindDependenciesOfSourceFileOptions): Promise<void> {
  const directory = sourceFile.getDirectoryPath()
  const resolveOptions = {
    basedir: directory,
    extensions,
    packageFilter: preferEsModule(extensions),
  }

  const nodesToProcess = sourceFile.getFirstChildByKindOrThrow(SyntaxKind.SyntaxList).getChildren()

  while (nodesToProcess.length > 0) {
    const descendant = nodesToProcess.shift() as Node

    if (TypeGuards.isImportDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripModuleSpecifier(
        descendant.getModuleSpecifier().getText(),
      )

      const dependencyPath = await resolvePkg(dependencySourceFileSpecifier, resolveOptions)

      if (isBuiltin(dependencySourceFileSpecifier)) {
        const { importNames, type } = findImportDeclarationImportNames(descendant)

        dependencies.push({
          importNames,
          type,
          moduleId: getModuleId(dependencyPath),
          moduleSpecifier: dependencyPath,
          resolvedFilePath: dependencyPath,
        })

        continue
      }

      const isLink = fileIsLink(dependencyPath)

      if (isLink) {
        const dependency: Dependency = {
          moduleSpecifier: dependencySourceFileSpecifier,
          moduleId: getModuleId(dependencyPath),
          resolvedFilePath: dependencyPath,
          importNames: findImportDeclarationImportNames(descendant).importNames,
          type: DependencyType.Link,
        }

        dependencies.push(dependency)

        continue
      }

      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)
      const dependency = findImportDeclarationDependency(
        descendant,
        dependencySourceFile,
        getModuleId,
        isLink,
      )

      dependencies.push(dependency)
      sourceFilesToProcess.push(dependencySourceFile)

      continue
    }

    if (TypeGuards.isImportEqualsDeclaration(descendant)) {
      const dependencySourceFileSpecifier = stripRequireSpecifier(
        descendant.getModuleReference().getText(),
      )

      if (isBuiltin(dependencySourceFileSpecifier)) {
        dependencies.push({
          importNames: findVariableNameOfCallExpression(
            descendant
              .getFirstAncestorByKindOrThrow(SyntaxKind.RequireKeyword)
              .getParentIfKindOrThrow(SyntaxKind.CallExpression),
          ),
          type: DependencyType.ImportRequire,
          moduleId: getModuleId(dependencySourceFileSpecifier),
          moduleSpecifier: dependencySourceFileSpecifier,
          resolvedFilePath: dependencySourceFileSpecifier,
        })

        continue
      }

      const dependencyPath = await resolvePkg(dependencySourceFileSpecifier, resolveOptions)
      const isLink = fileIsLink(dependencyPath)
      const dependencySourceFile = project.addExistingSourceFile(dependencyPath)
      const dependency = findImportEqualsDependency(
        descendant as ImportEqualsDeclaration,
        dependencySourceFile,
        getModuleId,
        isLink,
      )

      dependencies.push(dependency)

      if (dependency.type !== DependencyType.Link) {
        sourceFilesToProcess.push(dependencySourceFile)
      }

      continue
    }

    if (descendant.getKind() === SyntaxKind.ImportKeyword) {
      const importCallExpression = descendant.getParentIfKind(SyntaxKind.CallExpression)

      if (importCallExpression) {
        const dependency = await findDynamicImportDependency({
          importCallExpression,
          resolveOptions,
          getModuleId,
        })
        const dependencyPath = dependency.resolvedFilePath

        dependencies.push(dependency)

        if (dependency.type !== DependencyType.Link && !isBuiltin(dependency.moduleSpecifier)) {
          sourceFilesToProcess.push(project.addExistingSourceFile(dependencyPath))
        }

        continue
      }
    }

    const text = descendant.getText()

    if (TypeGuards.isIdentifier(descendant) && text === 'require') {
      const dependency = await findCommonjsRequireDependency({
        requireIdentifier: descendant,
        resolveOptions,
        getModuleId,
        isLink: fileIsLink,
      })

      if (dependency) {
        const dependencyPath = dependency.resolvedFilePath

        dependencies.push(dependency)

        if (dependency.type !== DependencyType.Link && !isBuiltin(dependencyPath)) {
          sourceFilesToProcess.push(project.addExistingSourceFile(dependencyPath))
        }

        continue
      }
    }

    if (TypeGuards.isExportDeclaration(descendant)) {
      const moduleSpecifier = descendant.getModuleSpecifier()

      if (moduleSpecifier) {
        const importNames = findImportNames(descendant.getNamedExports())
        const specifier = moduleSpecifier.getText()

        if (isBuiltin(specifier)) {
          const dependency: Dependency = {
            importNames: importNames.length > 0 ? importNames : [['*', '*']],
            moduleSpecifier: stripModuleSpecifier(specifier),
            moduleId: getModuleId(specifier),
            resolvedFilePath: specifier,
            type: DependencyType.ReExport,
          }

          dependencies.push(dependency)

          continue
        }

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

        continue
      }
    }

    if (
      (TypeGuards.isExportableNode(descendant) && descendant.isExported()) ||
      TypeGuards.isExportDeclaration(descendant) ||
      TypeGuards.isExportAssignment(descendant) ||
      (TypeGuards.isPropertyAccessExpression(descendant) && isCommonjsExportExpression(descendant))
    ) {
      const metadata = findExportMetadata(sourceFile, descendant, true)

      if (metadata) {
        exportMetadata.push(metadata)
      }

      continue
    }

    if (hasImports(text)) {
      nodesToProcess.push(...descendant.getChildren().filter(x => hasImports(x.getText())))
    }
  }
}

function hasImports(text: string): boolean {
  return text.includes('require(') || text.includes('import(')
}
