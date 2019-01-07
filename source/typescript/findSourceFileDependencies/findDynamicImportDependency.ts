import { CallExpression, SyntaxKind } from 'ts-simple-ast'
import { ResolveOptions, resolvePkg } from '../common/resolvePkg'
import { Dependency, DependencyType } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'

export type FindDynamicImportDependencyOptions = {
  importCallExpression: CallExpression
  resolveOptions: ResolveOptions
  getModuleId: (filePath: string) => number
}

export async function findDynamicImportDependency({
  importCallExpression,
  resolveOptions,
  getModuleId,
}: FindDynamicImportDependencyOptions) {
  const descendants = importCallExpression
    .getDescendantsOfKind(SyntaxKind.StringLiteral)
    .map(x => x.getText())
  const moduleSpecifier = stripModuleSpecifier(descendants[0])
  const resolvedFilePath = await resolvePkg(moduleSpecifier, resolveOptions)
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
