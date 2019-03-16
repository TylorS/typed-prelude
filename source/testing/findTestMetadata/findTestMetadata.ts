import { isNotNull } from '@typed/logic'
import {
  findChildNodes,
  findExportsFromSourceFile,
  getNodePosition,
  NodePosition,
  NodeTree,
} from '@typed/typescript'
import { getChildNodes } from '@typed/typescript/getChildNodes'
import { uuid } from '@typed/uuid'
import {
  isIdentifier,
  isVariableDeclaration,
  isVariableDeclarationList,
  isVariableStatement,
  Node,
  SourceFile,
  TypeChecker,
} from 'typescript'
import { Logger, NodeMetadata, TestMetadata } from '../types'
import { nodeIsTest } from './nodeIsTest'

const EXPORT_REGEX = /export\s(var|let|const)\s/
const EQUALS_REGEX = /\s?=\s?/
const EMPTY_STRING = ''

export type FindTestMetadataOptions = {
  sourceFile: SourceFile
  typeChecker: TypeChecker
  logger: Logger
}

export async function findTestMetadata({
  sourceFile,
  typeChecker,
  logger,
}: FindTestMetadataOptions): Promise<TestMetadata[]> {
  await logger.debug(`Finding export metadata: ${sourceFile.fileName}`)
  const exportMetadata = findExportsFromSourceFile(sourceFile, typeChecker).filter(x => !!x.node)
  const metadata = exportMetadata
    .map(({ node, exportNames, sourceFile }) => {
      const children = getChildNodes(node)

      if (exportNodeIsTest(node, children, typeChecker)) {
        const text = node.getText(sourceFile).replace(EXPORT_REGEX, EMPTY_STRING)
        const nodeTexts = [
          text,
          ...exportNames.map(exportName =>
            text
              .replace(exportName, EMPTY_STRING)
              .replace(EQUALS_REGEX, EMPTY_STRING)
              .trim(),
          ),
        ]
        const matchesTexts = (node: Node) => nodeTexts.indexOf(node.getText(sourceFile)) > -1
        const nodePosition = getNodePosition(sourceFile, node)
        const additionalTestNodeTree = findChildNodes(
          node => !isIdentifier(node) && !matchesTexts(node) && nodeIsTest(node, typeChecker),
          [node],
        )
        const additionalTests = additionalTestNodeTree.map(node =>
          nodeTreeToNodeMetadata(node, sourceFile),
        )
        const testInfo = getTestInfo(nodePosition, sourceFile)
        const testMetadata: TestMetadata = {
          id: uuid(),
          ...nodePosition,
          ...testInfo,
          exportNames,
          filePath: sourceFile.fileName,
          additionalTests,
        }

        return testMetadata
      }

      return null
    })
    .filter(isNotNull)

  await logger.debug(`TestMetadata ${sourceFile.fileName}: ${JSON.stringify(metadata, null, 2)}`)

  return metadata
}

function exportNodeIsTest(node: Node, children: Node[], typeChecker: TypeChecker): boolean {
  if (isVariableStatement(node) || isVariableDeclarationList(node)) {
    return !!findChildNodes(x => isVariableDeclaration(x), children).some(x =>
      nodeIsTest(x.node, typeChecker),
    )
  }

  return nodeIsTest(node, typeChecker)
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
