import { findChildNodes, findExportsFromSourceFile, getType, NodeTree } from '@typed/typescript'
import {
  isCallLikeExpression,
  isIdentifier,
  isTypeReferenceNode,
  isVariableDeclaration,
  isVariableDeclarationList,
  isVariableStatement,
  Node,
  Program,
  Signature,
  SourceFile,
  Type,
  TypeChecker,
  TypeFlags,
  UnionType,
} from 'typescript'
import { chain } from '../../list'
import { NodeMetadata, TestMetadata } from '../types'
import { nodeToMetadata } from './nodeToMetadata'

export type FindTestsOptions = {
  sourceFiles: SourceFile[]
  program: Program
}

const TYPED_TEST_REGEX = /__@TYPED_TEST@[0-9]+/g
const TYPED_COLLECTION_REGEX = /__@TYPED_COLLECTION@[0-9]+/g
const VARIABLE_STATEMENT_REGEX = /(export\s)?([(let)|(const)|(var)]+)\s[a-zA-z0-9]+(:\s[a-zA-Z0-9]+)?\s=(\s)?/

export function findTestMetadata({ sourceFiles, program }: FindTestsOptions): TestMetadata[] {
  const checker = program.getTypeChecker()
  const testMetadataList: TestMetadata[] = []

  for (const sourceFile of sourceFiles) {
    for (const { node, exportNames } of findExportsFromSourceFile(sourceFile, checker)) {
      const nodeMetadata = nodeToMetadata(node, sourceFile)
      const strippedText = nodeMetadata.text.replace(VARIABLE_STATEMENT_REGEX, '').trim()

      function cleanupDuplicateNodes(nodeTree: NodeTree): NodeMetadata[] {
        const nodeText = nodeTree.node.getText(sourceFile).trim()

        if (nodeTree.node.parent.parent === node || nodeText === strippedText) {
          return chain(cleanupDuplicateNodes, nodeTree.children)
        }

        return [nodeTreeToMetadata(nodeTree, sourceFile)]
      }
      const testNodes = chain(
        cleanupDuplicateNodes,
        findChildNodes(childNode => nodeIsTest(childNode, checker), [node]),
      )

      if (testNodes.length === 0) {
        continue
      }

      const testMetadata: TestMetadata = {
        ...nodeMetadata,
        exportNames,
        children: testNodes,
      }

      testMetadataList.push(testMetadata)
    }
  }

  return testMetadataList
}

function nodeTreeToMetadata(nodeTree: NodeTree, sourceFile: SourceFile): NodeMetadata {
  const nodeMetadata = nodeToMetadata(nodeTree.node, sourceFile)

  return {
    ...nodeMetadata,
    children: nodeTree.children.map(x => nodeTreeToMetadata(x, sourceFile)),
  }
}

function nodeIsTest(node: Node, checker: TypeChecker): boolean {
  if (!node || isIdentifier(node) || isTypeReferenceNode(node)) {
    return false
  }

  const type = isCallLikeExpression(node)
    ? checker.getReturnTypeOfSignature(checker.getResolvedSignature(node) as Signature)
    : getType(checker, node)
  const childrenMayContainTest =
    isVariableStatement(node) || isVariableDeclaration(node) || isVariableDeclarationList(node)

  const isTest = typeIsTest(type, checker)

  if (childrenMayContainTest && !isTest) {
    for (const child of node.getChildren()) {
      if (nodeIsTest(child, checker)) {
        return true
      }
    }
  }

  return isTest
}

function typeIsTest(type: Type | null, checker: TypeChecker): boolean {
  if (!type) {
    return false
  }

  const name = checker.typeToString(type)
  const propertyNames = getPropertyNames(type)
  const isTest = propertyNames.some(x => {
    const isTestRunner = TYPED_TEST_REGEX.test(x)
    const isTestCollection = TYPED_COLLECTION_REGEX.test(x)
    const isTest = isTestRunner || isTestCollection

    return isTest
  })

  if (name === 'Test' && !isTest && type.flags & TypeFlags.Union) {
    return (type as UnionType).types.some(x => typeIsTest(x, checker))
  }

  return isTest
}

function getPropertyNames(type?: Type | null): string[] {
  if (!type) {
    return []
  }

  return type.getProperties().map(x => x.getEscapedName().toString())
}
