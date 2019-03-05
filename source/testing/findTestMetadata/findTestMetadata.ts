import {
  findChildNodes,
  findExportsFromSourceFile,
  getNodePosition,
  NodePosition,
  NodeTree,
} from '@typed/typescript'
import { findFirstChildNode } from '@typed/typescript/common/findFirstChildNode'
import { SourceFile, TypeChecker } from 'typescript'
import { NodeMetadata, TestMetadata } from '../types'
import { nodeIsTest } from './nodeIsTest'

const EXPORT_REGEX = /export\s(var|let|const)\s/
const EQUALS_REGEX = /\s?=\s?/
const EMPTY_STRING = ''

export type FindTestMetadataOptions = {
  sourceFile: SourceFile
  typeChecker: TypeChecker
}

export function findTestMetadata({
  sourceFile,
  typeChecker,
}: FindTestMetadataOptions): TestMetadata[] {
  const exportMetadata = findExportsFromSourceFile(sourceFile, typeChecker)
  const exportedTestMetadata = exportMetadata.filter(
    metadata => !!findFirstChildNode(x => nodeIsTest(x, typeChecker), metadata.node),
  )
  const metadata: TestMetadata[] = exportedTestMetadata.map(({ exportNames, node, sourceFile }) => {
    const nodeText = node.getText().replace(EXPORT_REGEX, EMPTY_STRING)
    const nodeTexts = [
      nodeText,
      ...exportNames.map(name =>
        nodeText.replace(name, EMPTY_STRING).replace(EQUALS_REGEX, EMPTY_STRING),
      ),
    ]
    const nodePosition = getNodePosition(sourceFile, node)
    const additionalTestNodeTree = findChildNodes(node => {
      const text = node.getText()
      // Avoid duplicates
      if (nodeTexts.some(x => text === x)) {
        return false
      }

      return nodeIsTest(node, typeChecker)
    }, node.getChildren())
    const additionalTests = additionalTestNodeTree.map(node =>
      nodeTreeToNodeMetadata(node, sourceFile),
    )
    const testInfo = getTestInfo(nodePosition, sourceFile)
    const testMetadata: TestMetadata = {
      ...nodePosition,
      ...testInfo,
      exportNames,
      filePath: sourceFile.fileName,
      additionalTests,
    }

    return testMetadata
  })

  return metadata
}

function getTestInfo(
  { position: [start, end] }: NodePosition,
  { text }: SourceFile,
): { text: string } {
  const nodeText = text.slice(start, end)

  return {
    text: nodeText,
  }
}

function nodeTreeToNodeMetadata(
  { node, children }: NodeTree,
  sourceFile: SourceFile,
): NodeMetadata {
  const position = getNodePosition(sourceFile, node)
  const info = getTestInfo(position, sourceFile)

  const metadata: NodeMetadata = {
    ...position,
    ...info,
    additionalTests: children.map(tree => nodeTreeToNodeMetadata(tree, sourceFile)),
  }

  return metadata
}
