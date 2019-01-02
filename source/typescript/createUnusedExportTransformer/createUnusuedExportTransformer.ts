import { ReferenceFindableNode, SyntaxKind, ts, TypeGuards } from 'ts-simple-ast'
import { DependencyMap } from '../types'

export type CreateUnusedExportTransformerOptions = {
  dependencyMap: DependencyMap
}

export function createUnusedExportTransformer({
  dependencyMap,
}: CreateUnusedExportTransformerOptions): ts.TransformerFactory<ts.SourceFile> {
  return (context: ts.TransformationContext) => (sourceFile: ts.SourceFile) => {
    const { exportMetadata, moduleId } = dependencyMap.get(sourceFile.fileName)!

    // If it's the entry point keep all exports
    if (moduleId === 0) {
      return sourceFile
    }

    const unusedExports = exportMetadata.filter(
      x =>
        TypeGuards.isReferenceFindableNode(x.node) &&
        (x.node as ReferenceFindableNode)
          .findReferencesAsNodes()
          .filter(y => x.sourceFile !== y.getSourceFile()).length === 0,
    )
    const unusedExportNodes = unusedExports.map(({ node }) => {
      const nodes = [
        node.getFirstAncestorByKind(SyntaxKind.VariableStatement),
        node.getFirstAncestorByKind(SyntaxKind.ExportAssignment),
      ]

      for (const node of nodes) {
        if (node) {
          return node.compilerNode
        }
      }

      return node.compilerNode
    })

    if (unusedExportNodes.length === 0) {
      return sourceFile
    }

    return ts.visitEachChild(
      sourceFile,
      function visitNode(node: ts.Node): ts.Node | undefined {
        if (unusedExportNodes.includes(node)) {
          return undefined
        }

        return ts.visitEachChild(node, visitNode, context)
      },
      context,
    )
  }
}
