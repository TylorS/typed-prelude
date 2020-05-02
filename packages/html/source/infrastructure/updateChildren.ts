import { DomEnv } from '@typed/dom'
import { ElementVNode, getKey, UpdateChildren, vNodesAreEqual } from '../domain'
import { createElement } from './createElement'
import { patchElement } from './patchElement'

export const updateChildren: UpdateChildren<DomEnv> = function* (parentElement, current, updated) {
  // indexes
  let currentStartIndex = 0
  let updatedStartIndex = 0
  let currentEndIndex = current.length - 1
  let updatedEndIndex = updated.length - 1

  // VNodes
  let currentStartVNode = current[currentStartIndex]
  let updatedStartVNode = updated[updatedStartIndex]
  let currentEndVNode = current[currentEndIndex]
  let updatedEndVNode = updated[updatedEndIndex]

  // an object mapping keys to indexes in currentChildren array
  let mappedKeyToCurrentIndex: Map<any, any> | void

  while (currentStartIndex <= currentEndIndex && updatedStartIndex <= updatedEndIndex) {
    if (!currentStartVNode) {
      currentStartVNode = current[++currentStartIndex]
    } else if (!currentEndVNode) {
      currentEndVNode = current[--currentEndIndex]
    } else if (vNodesAreEqual(currentStartVNode, updatedStartVNode)) {
      yield* patchElement(currentStartVNode, updatedStartVNode)
      currentStartVNode = current[++currentStartIndex]
      updatedStartVNode = updated[++updatedStartIndex]
    } else if (vNodesAreEqual(currentEndVNode, updatedEndVNode)) {
      yield* patchElement(currentEndVNode, updatedEndVNode)
      currentEndVNode = current[--currentEndIndex]
      updatedEndVNode = updated[--updatedEndIndex]
    } else if (vNodesAreEqual(currentStartVNode, updatedEndVNode)) {
      yield* patchElement(currentStartVNode, updatedEndVNode)
      parentElement.insertBefore(currentStartVNode.node, currentEndVNode.node.nextSibling)
      currentStartVNode = current[++currentStartIndex]
      updatedEndVNode = updated[--updatedEndIndex]
    } else if (vNodesAreEqual(currentEndVNode, updatedStartVNode)) {
      yield* patchElement(currentEndVNode, updatedStartVNode)
      parentElement.insertBefore(currentEndVNode.node, currentStartVNode.node)
      currentEndVNode = current[--currentEndIndex]
      updatedStartVNode = updated[++updatedStartIndex]
    } else {
      if (!mappedKeyToCurrentIndex) {
        mappedKeyToCurrentIndex = mapKeyToCurrentIndex(current, currentStartIndex, currentEndIndex)
      }

      const currentIndexKey = mappedKeyToCurrentIndex.get(getKey(updatedStartVNode))

      if (!currentIndexKey) {
        // new element
        const element = yield* createElement(updatedStartVNode)

        parentElement.insertBefore(element, currentStartVNode.node)

        updatedStartVNode = updated[++updatedStartIndex]
      } else {
        const keyedVNode = current[currentIndexKey]

        yield* patchElement(keyedVNode, updatedStartVNode)

        parentElement.insertBefore(keyedVNode.node, currentStartVNode.node)

        updatedStartVNode = updated[++updatedStartIndex]
      }
    }
  }
}

function mapKeyToCurrentIndex(
  children: readonly ElementVNode[],
  startIndex: number,
  endIndex: number,
): Map<any, any> {
  let index: number = startIndex
  const map: Map<any, any> = new Map()
  let key: any

  for (; index <= endIndex; ++index) {
    key = getKey(children[index])

    if (key) map.set(key, index)
  }

  return map
}
