import { sync } from 'resolve'
import { Identifier, SyntaxKind } from 'ts-simple-ast'
import { Dependency, DependencyType } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export type FindCommonjsRequireDependencyOptions = {
  requireIdentifier: Identifier
  resolveOptions: ResolveOptions
  getModuleId: (filePath: string) => number
  isLink: (filePath: string) => boolean
}

export function findCommonjsRequireDependency({
  requireIdentifier,
  resolveOptions,
  getModuleId,
  isLink,
}: FindCommonjsRequireDependencyOptions): Dependency | null {
  const callExpression = requireIdentifier.getParentIfKind(SyntaxKind.CallExpression)

  if (callExpression) {
    const descendants = callExpression
      .getDescendantsOfKind(SyntaxKind.StringLiteral)
      .map(x => x.getText())
    const moduleSpecifier = stripModuleSpecifier(descendants[0])
    const resolvedFilePath = sync(moduleSpecifier, resolveOptions)
    const moduleId = getModuleId(resolvedFilePath)
    const resolvedToLink = isLink(resolvedFilePath)

    const dependency: Dependency = {
      moduleSpecifier,
      moduleId,
      importNames: findVariableNameOfCallExpression(callExpression),
      resolvedFilePath,
      type: resolvedToLink ? DependencyType.Link : DependencyType.CommonjsRequire,
    }

    return dependency
  }

  return null
}
