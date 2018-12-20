import { sync } from 'resolve'
import Project, { Identifier, SourceFile, SyntaxKind } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export type FindCommonjsRequireDependencyOptions = {
  requireIdentifier: Identifier
  resolveOptions: ResolveOptions
  dependencies: Dependency[]
  sourceFilesToProcess: SourceFile[]
  project: Project
  getModuleId: (filePath: string) => number
  isLink: (filePath: string) => boolean
}

export function findCommonjsRequireDependency({
  requireIdentifier,
  resolveOptions,
  dependencies,
  sourceFilesToProcess,
  project,
  getModuleId,
  isLink,
}: FindCommonjsRequireDependencyOptions) {
  const callExpression = requireIdentifier.getParentIfKind(SyntaxKind.CallExpression)

  if (callExpression) {
    const descendants = callExpression
      .getDescendantsOfKind(SyntaxKind.StringLiteral)
      .map(x => x.getText())
    const moduleSpecifier = stripModuleSpecifier(descendants[0])
    const resolvedFilePath = sync(stripModuleSpecifier(moduleSpecifier), resolveOptions)
    const moduleId = getModuleId(resolvedFilePath)
    const resolvedToLink = isLink(resolvedFilePath)

    const dependency: Dependency = {
      moduleSpecifier,
      moduleId,
      importNames: findVariableNameOfCallExpression(callExpression),
      resolvedFilePath,
      type: resolvedToLink ? 'link' : 'commonjs-require',
    }

    if (!resolvedToLink) {
      sourceFilesToProcess.push(project.addExistingSourceFile(resolvedFilePath))
    }

    dependencies.push(dependency)
  }
}
