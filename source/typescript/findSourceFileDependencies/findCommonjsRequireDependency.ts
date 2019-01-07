import { Identifier, SyntaxKind } from 'ts-simple-ast'
import { ResolveOptions, resolvePkg } from '../common/resolvePkg'
import { Dependency, DependencyType } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'

export type FindCommonjsRequireDependencyOptions = {
  requireIdentifier: Identifier
  resolveOptions: ResolveOptions
  getModuleId: (filePath: string) => number
  isLink: (filePath: string) => boolean
}

export async function findCommonjsRequireDependency({
  requireIdentifier,
  resolveOptions,
  getModuleId,
  isLink,
}: FindCommonjsRequireDependencyOptions): Promise<Dependency | null> {
  const callExpression = requireIdentifier.getParentIfKind(SyntaxKind.CallExpression)

  if (callExpression) {
    const descendants = callExpression
      .getDescendantsOfKind(SyntaxKind.StringLiteral)
      .map(x => x.getText())

    if (descendants.length === 0) {
      return null
    }

    const moduleSpecifier = stripModuleSpecifier(descendants[0])
    const resolvedFilePath = await resolvePkg(moduleSpecifier, resolveOptions)
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
