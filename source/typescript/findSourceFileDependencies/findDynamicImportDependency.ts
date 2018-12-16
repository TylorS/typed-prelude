import { sync } from 'resolve'
import Project, { CallExpression, SourceFile, SyntaxKind } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export function findDynamicImportDependency(
  importCallExpression: CallExpression,
  resolveOptions: ResolveOptions,
  dependencies: Dependency[],
  sourceFilesToProcess: SourceFile[],
  project: Project,
) {
  const [moduleSpecifier] = importCallExpression
    .getDescendantsOfKind(SyntaxKind.StringLiteral)
    .map(x => x.getText())
  const resolvedFilePath = sync(stripModuleSpecifier(moduleSpecifier), resolveOptions)

  const dependency: Dependency = {
    type: 'dynamic-import',
    importNames: findVariableNameOfCallExpression(importCallExpression),
    moduleSpecifier,
    resolvedFilePath,
  }

  sourceFilesToProcess.push(project.addExistingSourceFile(resolvedFilePath))
  dependencies.push(dependency)
}
