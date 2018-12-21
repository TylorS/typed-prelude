import { sync } from 'resolve'
import { CallExpression, SyntaxKind } from 'ts-simple-ast'
import { Dependency, DependencyType } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export type FindDynamicImportDependencyOptions = {
  importCallExpression: CallExpression
  resolveOptions: ResolveOptions
  getModuleId: (filePath: string) => number
}

export function findDynamicImportDependency({
  importCallExpression,
  resolveOptions,
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
    type: DependencyType.DynamicImport,
  }

  return dependency
}
