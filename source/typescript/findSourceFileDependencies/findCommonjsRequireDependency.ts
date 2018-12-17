import { sync } from 'resolve'
import Project, { Identifier, SourceFile, SyntaxKind } from 'ts-simple-ast'
import { Dependency } from '../types'
import { findVariableNameOfCallExpression, stripModuleSpecifier } from './helpers'
import { ResolveOptions } from './types'

export function findCommonjsRequireDependency(
  requireIdentifier: Identifier,
  resolveOptions: ResolveOptions,
  dependencies: Dependency[],
  sourceFilesToProcess: SourceFile[],
  project: Project,
  getModuleId: (filePath: string) => number,
) {
  const callExpression = requireIdentifier.getParentIfKind(SyntaxKind.CallExpression)

  if (callExpression) {
    const [moduleSpecifier] = callExpression
      .getDescendantsOfKind(SyntaxKind.StringLiteral)
      .map(x => x.getText())
    const resolvedFilePath = sync(stripModuleSpecifier(moduleSpecifier), resolveOptions)
    const moduleId = getModuleId(resolvedFilePath)

    const dependency: Dependency = {
      moduleSpecifier,
      moduleId,
      importNames: findVariableNameOfCallExpression(callExpression),
      resolvedFilePath,
      type: 'commonjs-require',
    }

    sourceFilesToProcess.push(project.addExistingSourceFile(resolvedFilePath))
    dependencies.push(dependency)
  }
}
