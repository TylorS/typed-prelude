import {
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  NamespaceDeclaration,
  Node,
  PropertyAccessExpression,
  SourceFile,
  SyntaxKind,
  TypeAliasDeclaration,
  TypeGuards,
  VariableDeclaration,
} from 'ts-simple-ast'
import { ascend, uniq } from '../../list'
import { Mutable } from '../../objects'
import { Tuple } from '../../tuple'
import { ExportMetadata } from '../types'

export type FindSourceFileExportsOptions = {
  sourceFile: SourceFile
  commonjs?: boolean
}

const MODULE_EXPORTS = /^module\.exports/
const EXPORTS = /^(exports.)([a-zA-Z0-9]+)/

const moduleExport = ['module', 'export']
const defaultExport = ['default', 'default']

export function findSourceFileExports({
  sourceFile,
  commonjs = true,
}: FindSourceFileExportsOptions): ExportMetadata[] {
  const exportMetadataList: ExportMetadata[] = []
  const nodesToCheck = [
    ...sourceFile.getExportedDeclarations(),
    ...sourceFile.getExportAssignments(),
  ]
  const allNodes = commonjs
    ? nodesToCheck.concat(
        sourceFile
          .getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)
          .filter(isCommonjsExportExpression),
      )
    : nodesToCheck

  for (const node of uniq(allNodes)) {
    const exportMetadata: Mutable<ExportMetadata> = {
      exportNames: [],
      sourceFile,
      node,
    }

    if (
      TypeGuards.isVariableDeclaration(node) ||
      TypeGuards.isFunctionDeclaration(node) ||
      TypeGuards.isClassDeclaration(node) ||
      TypeGuards.isInterfaceDeclaration(node) ||
      TypeGuards.isTypeAliasDeclaration(node) ||
      TypeGuards.isEnumDeclaration(node) ||
      TypeGuards.isNamespaceDeclaration(node)
    ) {
      exportMetadata.exportNames.push(findExportNamesFromVariableDeclaration(node))
    }

    if (TypeGuards.isExportAssignment(node)) {
      const isExportEquals = node.isExportEquals()
      const expression = node.getExpression()

      exportMetadata.node = expression

      const exportNames = isExportEquals ? moduleExport.slice() : defaultExport.slice()

      if (TypeGuards.isIdentifier(expression)) {
        exportNames[0] = expression.getText()
      }

      exportMetadata.exportNames.push(exportNames)
    }

    if (commonjs && TypeGuards.isPropertyAccessExpression(node)) {
      exportMetadata.exportNames.push(findExportNamesFromCommonjsExportExpression(node))
      const [expression] = node
        .getParentIfKindOrThrow(SyntaxKind.BinaryExpression)
        .getChildren()
        .filter(commonjsExpressionFilter)

      if (expression) {
        exportMetadata.node = expression
      }
    }

    exportMetadataList.push(exportMetadata as ExportMetadata)
  }

  return exportMetadataList.sort(ascend(x => x.node.getStartLinePos()))
}

function commonjsExpressionFilter(node: Node): boolean {
  const kind = node.getKind()

  return kind !== SyntaxKind.PropertyAccessExpression && kind !== SyntaxKind.FirstAssignment
}

function isCommonjsExportExpression(node: PropertyAccessExpression): boolean {
  const text = node.getText()
  const matches = EXPORTS.test(text) || MODULE_EXPORTS.test(text)
  // Do not currently support dynamic commonjs modules
  // If anyone relies on that behavior I'd love to see a reasonable code example.
  const isTopLevel = node.getIndentationLevel() === 0

  return matches && isTopLevel
}

function findExportNamesFromCommonjsExportExpression(
  node: PropertyAccessExpression,
): Tuple<string> {
  const text = node.getText()
  if (MODULE_EXPORTS.test(text)) {
    return ['module', 'exports']
  }

  const matches = EXPORTS.exec(text)!

  return ['exports', matches[2]]
}

function findExportNamesFromVariableDeclaration(
  declaration:
    | VariableDeclaration
    | FunctionDeclaration
    | ClassDeclaration
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | EnumDeclaration
    | NamespaceDeclaration,
): Tuple<string> {
  const [name, alias] = declaration.getChildrenOfKind(SyntaxKind.Identifier)
  const nameText: string = name.getText()
  const aliasText: string = !!alias ? alias.getText() : nameText
  const exportNames: Tuple<string> = [nameText, aliasText]

  return exportNames
}
