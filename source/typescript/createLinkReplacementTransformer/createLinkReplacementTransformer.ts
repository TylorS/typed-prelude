import { basename } from 'path'
import { ts } from 'ts-simple-ast'
import { pathJoin } from '../../common/pathJoin'
import { stripModuleSpecifier } from '../findSourceFileDependencies/helpers'
import { Dependency } from '../types'

export type CreateLinkReplacementTransformerOptions = {
  publicPath: string
  linkDependencies: Record<string, Dependency[]>
}

export function createLinkReplacementTransformer({
  publicPath,
  linkDependencies,
}: CreateLinkReplacementTransformerOptions) {
  return (context: ts.TransformationContext) => (sourceFile: ts.SourceFile): ts.SourceFile => {
    const filePath = sourceFile.fileName
    const dependencies = linkDependencies[filePath]

    return ts.visitEachChild(
      sourceFile,
      function visitNode(node: ts.Node): ts.Node | undefined {
        if (
          dependencies &&
          ts.isImportDeclaration(node) &&
          ts.isStringLiteral(node.moduleSpecifier)
        ) {
          const moduleSpecifier = stripModuleSpecifier(node.moduleSpecifier.text)
          const dependency = dependencies.find(x => x.moduleSpecifier === moduleSpecifier)

          if (dependency) {
            return createLinkDependencyVariableStatement(publicPath, dependency)
          }
        }

        if (
          dependencies &&
          ts.isImportEqualsDeclaration(node) &&
          ts.isStringLiteral(node.moduleReference)
        ) {
          const moduleSpecifier = stripModuleSpecifier(node.moduleReference.text)
          const dependency = dependencies.find(x => x.moduleSpecifier === moduleSpecifier)

          if (dependency) {
            return createLinkDependencyVariableStatement(publicPath, dependency)
          }
        }

        if (
          ts.isCallExpression(node) &&
          isRequireIdentifier(node.expression) &&
          node.arguments.length === 1 &&
          ts.isStringLiteral(node.arguments[0])
        ) {
          if (dependencies) {
            const moduleSpecifier = stripModuleSpecifier(
              (node.arguments[0] as ts.StringLiteral).text,
            )
            const dependency = dependencies.find(x => x.moduleSpecifier === moduleSpecifier)

            if (dependency) {
              return createLinkDependencyVariableStatement(publicPath, dependency)
            }
          }
        }

        return ts.visitEachChild(node, visitNode, context)
      },
      context,
    )
  }
}
function isRequireIdentifier(expression: ts.LeftHandSideExpression): expression is ts.Identifier {
  return ts.isIdentifier(expression) && expression.text === 'require'
}

function createLinkDependencyVariableStatement(
  publicPath: string,
  dependency: Dependency,
): ts.Node | undefined {
  if (dependency.importNames.length === 0) {
    return undefined
  }

  const linkPath = pathJoin([publicPath, basename(dependency.resolvedFilePath)])

  return ts.createVariableStatement(
    [ts.createToken(ts.SyntaxKind.ConstKeyword)],
    dependency.importNames.map(([, name]) =>
      ts.createVariableDeclaration(name, void 0, ts.createStringLiteral(linkPath)),
    ),
  )
}
