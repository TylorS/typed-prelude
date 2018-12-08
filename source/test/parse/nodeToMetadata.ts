import { getNodePosition, NodePosition } from '@typed/typescript'
import { Node, SourceFile } from 'typescript'
import { memoize } from '../../lambda'
import { uuid } from '../../uuid'
import { NodeMetadata } from '../types'

export function nodeToMetadata(node: Node, sourceFile: SourceFile): NodeMetadata {
  const nodePosition = getNodePosition(sourceFile, node)
  const id = nodeUuid(sourceFile.fileName, nodePosition)
  const text = node.getFullText(sourceFile)

  return {
    ...nodePosition,
    filePath: sourceFile.fileName,
    id,
    text,
    children: [],
  }
}

const nodeUuid = memoize((_: string, __: NodePosition) => uuid())
