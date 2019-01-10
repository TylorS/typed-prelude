import { Node, Symbol, Type, TypeChecker } from 'typescript'
import { curry } from '../../lambda'

export const getSymbolFromNode: {
  (typeChecker: TypeChecker, node: Node): Symbol | null
  (typeChecker: TypeChecker): (node: Node) => Symbol | null
} = curry(__getSymbolFromNode)

function __getSymbolFromNode(typeChecker: TypeChecker, node: Node): Symbol | null {
  const type = getType(typeChecker, node)

  return type ? getSymbolFromType(type) : null
}

export function getSymbolFromType(type: Type): Symbol | null {
  try {
    return type.getSymbol() || null
  } catch {
    return null
  }
}

function getType(checker: TypeChecker, node: Node): Type | null {
  try {
    return checker.getTypeAtLocation(node) || null
    // tslint:disable-next-line:no-empty
  } catch {}

  return null
}
