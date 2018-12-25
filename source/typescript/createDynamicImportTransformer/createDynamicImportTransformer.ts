import { ts } from 'ts-simple-ast'
import { pathJoin } from '../../common/pathJoin'

export type CreateDynamicImportTransformerOptions = {
  moduleIdToFilePaths: Map<number, string>
  dynamicImportDependencies: Record<string, string>
  publicPath: string
}

export function createDynamicImportTransformer({
  dynamicImportDependencies,
  moduleIdToFilePaths,
  publicPath,
}: CreateDynamicImportTransformerOptions) {
  return function dynamicImportTransformer(context: ts.TransformationContext) {
    return (sourceFile: ts.SourceFile): ts.SourceFile => {
      return ts.visitEachChild(
        sourceFile,
        function visitNode(node: ts.Node): ts.Node | undefined {
          if (
            ts.isCallExpression(node) &&
            isDynamicImportKeyword(node.expression) &&
            node.arguments.length === 1 &&
            ts.isStringLiteral(node.arguments[0])
          ) {
            const specifier = (node.arguments[0] as any).text
            const moduleId = parseFloat(specifier)
            const filePath = moduleIdToFilePaths.get(moduleId)!
            const generatedPath = pathJoin([publicPath, dynamicImportDependencies[filePath]])

            return ts.updateCall(node, ts.createIdentifier('__typedRequire'), node.typeArguments, [
              ts.createLiteral(`${generatedPath}`),
            ])
          }

          return ts.visitEachChild(node, visitNode, context)
        },
        context,
      )
    }
  }
}

function isDynamicImportKeyword(expression: ts.LeftHandSideExpression) {
  return expression.kind === ts.SyntaxKind.ImportKeyword
}
