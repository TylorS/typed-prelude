import { sync } from 'resolve'
import Project, { CallExpression, SourceFile, SyntaxKind } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export type FindDynamicImportDependencyOptions = {
  importCallExpression: CallExpression
  resolveOptions: ResolveOptions
  dependencies: Dependency[]
  sourceFilesToProcess: SourceFile[]
  project: Project
  getModuleId: (filePath: string) => number
}

export function findDynamicImportDependency({
  importCallExpression,
  resolveOptions,
  dependencies,
  sourceFilesToProcess,
  project,
  getModuleId,
}: FindDynamicImportDependencyOptions) {
  const descendants = importCallExpression
    .getDescendantsOfKind(SyntaxKind.StringLiteral)
    .map(x => x.getText())
  const moduleSpecifier = stripModuleSpecifier(descendants[0])
  const resolvedFilePath = sync(moduleSpecifier, resolveOptions)
  const moduleId = getModuleId(resolvedFilePath)

  const dependency: Dependency = {
    moduleSpecifier,
    moduleId,
    importNames: findVariableNameOfCallExpression(importCallExpression),
    resolvedFilePath,
    type: 'dynamic-import',
  }

  sourceFilesToProcess.push(project.addExistingSourceFile(resolvedFilePath))
  dependencies.push(dependency)
}
