import {
  CallExpression,
  ExportSpecifier,
  ImportSpecifier,
  SyntaxKind,
  TypeGuards,
} from 'ts-simple-ast'
import { Tuple } from '../../tuple'

const REQUIRE_OPEN_REGEX = /^require\(/
const CLOSING_BRACE = /\)$/

const MODULE_SPECIFIER_OPEN = /^(\'|\")/
const MODULE_SPECIFIER_CLOSE = /(\'|\")$/

export function stripRequireSpecifier(specifier: string): string {
  return specifier.replace(REQUIRE_OPEN_REGEX, '').replace(CLOSING_BRACE, '')
}

export function stripModuleSpecifier(specifier: string): string {
  return specifier.replace(MODULE_SPECIFIER_OPEN, '').replace(MODULE_SPECIFIER_CLOSE, '')
}

export function findImportNames(
  specifiers: Array<ImportSpecifier | ExportSpecifier>,
): Array<Tuple<string, string>> {
  return specifiers.map(specifier => {
    const name = specifier.getNameNode().getText()
    const alias = specifier.getAliasNode()

    return [name, alias ? alias.getText() : name] as [string, string]
  })
}

export function findVariableNameOfCallExpression(
  callExpression: CallExpression,
): Array<Tuple<string, string>> {
  const variableDeclaration = callExpression.getFirstAncestorByKind(SyntaxKind.VariableDeclaration)

  if (variableDeclaration) {
    const name = variableDeclaration.getNameNode()

    if (TypeGuards.isIdentifier(name)) {
      return [[name.getText(), name.getText()]]
    }

    if (TypeGuards.isObjectBindingPattern(name) || TypeGuards.isArrayBindingPattern(name)) {
      const names = name.getDescendantsOfKind(SyntaxKind.BindingElement)

      return names.map(x => {
        const [name, alias] = x.getDescendantsOfKind(SyntaxKind.Identifier)
        const nameText = name.getText()

        return [nameText, alias ? alias.getText() : nameText] as [string, string]
      })
    }
  }

  return []
}
