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
import { Tuple } from '../../tuple'
import { defaultExport, EXPORTS, MODULE_EXPORTS, moduleExport } from './constants'

export function findExportMetadata(sourceFile: SourceFile, node: Node, commonjs: boolean) {
  const exportMetadata = {
    exportNames: [] as Array<Tuple<string>>,
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
    exportMetadata.exportNames.push(findExportNamesFromDeclaration(node))
  }

  if (TypeGuards.isExportAssignment(node)) {
    const isExportEquals = node.isExportEquals()
    const expression = node.getExpression()

    exportMetadata.node = expression

    const exportNames = isExportEquals
      ? (moduleExport.slice() as Tuple<string>)
      : (defaultExport.slice() as Tuple<string>)

    if (TypeGuards.isIdentifier(expression)) {
      exportNames[0] = expression.getText()
    }

    exportMetadata.exportNames.push(exportNames)
  }

  if (commonjs && TypeGuards.isPropertyAccessExpression(node)) {
    const cjsName = findExportNamesFromCommonjsExportExpression(node)
    const binaryExpression = node.getParentIfKind(SyntaxKind.BinaryExpression)

    if (!cjsName || !binaryExpression) {
      return null
    }

    const [expression] = binaryExpression.getChildren().filter(commonjsExpressionFilter)

    if (expression) {
      exportMetadata.node = expression
    }
  }
}

function commonjsExpressionFilter(node: Node): boolean {
  const kind = node.getKind()

  return kind !== SyntaxKind.PropertyAccessExpression && kind !== SyntaxKind.FirstAssignment
}

function findExportNamesFromCommonjsExportExpression(
  node: PropertyAccessExpression,
): Tuple<string> | null {
  const text = node.getText()
  if (MODULE_EXPORTS.test(text)) {
    return ['module', 'exports']
  }

  const matches = EXPORTS.exec(text)

  if (!matches) {
    return null
  }

  const [, , exportName] = matches

  return ['exports', exportName]
}

function findExportNamesFromDeclaration(
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
