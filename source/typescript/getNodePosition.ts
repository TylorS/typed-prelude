import { Node, SourceFile } from 'typescript'
import { curry } from '../lambda'
import { getPosition } from './common/getPosition'
import { NodePosition } from './types'

export const getNodePosition: {
  (sourceFile: SourceFile, node: Node): NodePosition
  (sourceFile: SourceFile): (node: Node) => NodePosition
} = curry(__getNodePosition)

function __getNodePosition(sourceFile: SourceFile, node: Node): NodePosition {
  const [start, end] = getPosition(node)
  const startLine = sourceFile.text.slice(0, start).split(/\n/g).length
  const text = node.getText(sourceFile)
  const numberOfLines = text.split(/\n/g).length
  const endLine = startLine + numberOfLines

  return {
    position: [start, end],
    startLine,
    endLine,
    numberOfLines,
  }
}
