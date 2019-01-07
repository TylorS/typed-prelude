import { PropertyAccessExpression } from 'ts-simple-ast'
import { EXPORTS, MODULE_EXPORTS } from './constants'

export function isCommonjsExportExpression(node: PropertyAccessExpression): boolean {
  const text = node.getText()
  const matches = EXPORTS.test(text) || MODULE_EXPORTS.test(text)
  // Do not currently support dynamic commonjs modules
  // If anyone relies on that behavior I'd love to see a reasonable code example.
  const isTopLevel = node.getIndentationLevel() === 0

  return matches && isTopLevel
}
