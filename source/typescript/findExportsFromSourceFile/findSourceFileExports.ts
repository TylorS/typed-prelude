import {
  Identifier,
  isExportAssignment,
  isExportDeclaration,
  isExportSpecifier,
  isFunctionLike,
  isIdentifier,
  isVariableDeclaration,
  isVariableDeclarationList,
  Node,
  SourceFile,
  SyntaxKind,
  TypeChecker,
} from 'typescript'
import { isExportableNode } from '../common/exports'
import { findFirstChildNode } from '../common/findFirstChildNode'
import { getSymbolFromNode } from '../common/getSymbolFromNode'
import { findChildNodes } from '../findChildNodes'
import { ExportMetadata } from '../types'

export function findExportsFromSourceFile(
  sourceFile: SourceFile,
  typeChecker: TypeChecker,
): ExportMetadata[] {
  return deduplicateMetadata(findExportMetadata(sourceFile, typeChecker))
}

function deduplicateMetadata(metadata: ExportMetadata[]) {
  const deduplicated: ExportMetadata[] = []

  for (const exportMetadata of metadata) {
    const index = deduplicated.findIndex(x => x.node === exportMetadata.node)

    if (index === -1) {
      deduplicated.push(exportMetadata)
    } else {
      deduplicated[index].exportNames.push(...exportMetadata.exportNames)
    }
  }

  return deduplicated
}

function findExportMetadata(sourceFile: SourceFile, typeChecker: TypeChecker): ExportMetadata[] {
  const getSymbolOfNode = (node: Node) => getSymbolFromNode(typeChecker, node)
  const exportMetadata: ExportMetadata[] = []

  function findExportMetadata(node: Node, identifier?: string) {
    // ExportDeclaration
    // ExportAssignment to Identifier
    if (identifier) {
      exportMetadata.push({
        node,
        exportNames: [identifier],
      })

      return
    }

    if (isExportAssignment(node)) {
      const text = node.getText(sourceFile)
      const hasDefault = text.includes('export default ')
      const exportNames = hasDefault ? ['default'] : [text]

      exportMetadata.push({
        node,
        exportNames,
      })

      return
    }

    // Variable Statements
    // Class Declaration
    // Function Declarations
    const exportNameNode = findFirstChildNode(isIdentifier, node) as Node

    if (exportNameNode) {
      const exportName = exportNameNode.getText(sourceFile)

      return exportMetadata.push({
        node,
        exportNames: [exportName],
      })
    }
  }

  function findNodesOfSymbol(identifier: Identifier) {
    const symbol = getSymbolOfNode(identifier)

    if (!symbol) {
      return []
    }

    return findChildNodes(x => getSymbolOfNode(x) === symbol, [sourceFile])
      .filter(x => !isExportSpecifier(x.node) && !isExportAssignment(x.node))
      .map(x => x.node)
  }

  function checkNode(node: Node) {
    const canContainExportModifier = isExportableNode(node)
    const hasExportedModifier = canContainExportModifier && hasExportModifer(node)

    if (hasExportedModifier) {
      return findExportMetadata(node)
    }

    // export = <something>
    // export default <something>
    if (isExportAssignment(node)) {
      const text = node.getText(sourceFile)
      const hasDefault = text.includes('export default')
      const identifier = findFirstChildNode(isIdentifier, node)

      if (identifier) {
        const [originalNode] = findNodesOfSymbol(identifier as Identifier)
        const nodeToUse = findNodeToUse(originalNode)

        return findExportMetadata(nodeToUse, hasDefault ? 'default' : 'module.export')
      }

      return findExportMetadata(node)
    }

    if (isExportDeclaration(node)) {
      if (node.exportClause) {
        const { elements: exportSpecifiers } = node.exportClause

        for (const specifier of exportSpecifiers) {
          // exportName is undefined unless { foo as bar }
          const [localName, exportName] = findChildNodes(isIdentifier, [specifier])
          const [originalNode] = findNodesOfSymbol(specifier.name)

          findExportMetadata(
            originalNode,
            ((exportName ? exportName.node : localName.node) as Identifier).getText(sourceFile),
          )
        }

        return
      }
    }
  }

  // SourceFile always has SyntaxList at 0
  const syntaxList = sourceFile.getChildAt(0)
  // Exports must be top-level
  syntaxList.getChildren(sourceFile).forEach(checkNode)

  return exportMetadata
}

function findNodeToUse(node: Node): Node {
  if (
    (isVariableDeclaration(node) || isVariableDeclarationList(node) || isFunctionLike(node)) &&
    node.parent
  ) {
    return findNodeToUse(node.parent)
  }

  return node
}

function hasExportModifer(node: Node): boolean {
  if (node.modifiers) {
    for (const modifier of node.modifiers) {
      if (modifier.kind === SyntaxKind.ExportKeyword) {
        return true
      }
    }
  }

  return false
}
