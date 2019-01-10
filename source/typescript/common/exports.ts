import {
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  ModuleDeclaration,
  Node,
  SourceFile,
  SyntaxKind,
  TypeAliasDeclaration,
  VariableStatement,
} from 'typescript'

export type ExportableStatements =
  | ClassDeclaration
  | EnumDeclaration
  | FunctionDeclaration
  | InterfaceDeclaration
  | ModuleDeclaration
  | VariableStatement
  | TypeAliasDeclaration

export const EXPORTABLE_NODES = [
  SyntaxKind.ClassDeclaration,
  SyntaxKind.EnumDeclaration,
  SyntaxKind.FunctionDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.ModuleDeclaration,
  SyntaxKind.VariableStatement,
  SyntaxKind.TypeAliasDeclaration,
]

export const EXPORT_KINDS = [
  SyntaxKind.ExportAssignment,
  SyntaxKind.ExportDeclaration,
  SyntaxKind.PropertyAccessExpression, // Commonjs only
]

export const EXPORTS_REGEX = /^(module\.)?exports\.?(.+)=/

export const isExportable = ({ kind }: Node) =>
  EXPORTABLE_NODES.includes(kind) || EXPORT_KINDS.includes(kind)

export const isExportableNode = (node: Node): node is ExportableStatements =>
  EXPORTABLE_NODES.includes(node.kind)

export const isCommonJsExport = (node: Node, sourceFile: SourceFile) =>
  node.kind === SyntaxKind.PropertyAccessExpression && EXPORTS_REGEX.test(node.getText(sourceFile))

export const isExportedDeclaration = ({ modifiers }: ExportableStatements): boolean =>
  !!modifiers && modifiers.findIndex(({ kind }) => kind === SyntaxKind.ExportKeyword) > -1

export const isDefaultExportDeclaration = (node: ExportableStatements): boolean =>
  isExportedDeclaration(node) &&
  node.modifiers!.findIndex(({ kind }) => kind === SyntaxKind.DefaultKeyword) > -1
