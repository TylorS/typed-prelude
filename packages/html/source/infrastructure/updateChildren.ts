import { DomEnv } from '@typed/dom'
import { getKey, UpdateChildren, VNodeChildren, vNodesAreEqual } from '../domain'
import { addElements } from './addElements'
import { createElement } from './createElement'
import { getNodeOrThrow } from './getNodeOrThrow'
import { patchElement } from './patchElement'
import { PatchFailure } from './PatchFailure'
import { removeElements } from './removeElements'

export const updateChildren: UpdateChildren<DomEnv & PatchFailure> = function* (
  parentElement,
  current,
  updated,
) {
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
      parentElement.insertBefore(
        yield* getNodeOrThrow(currentStartVNode),
        (yield* getNodeOrThrow(currentEndVNode)).nextSibling,
      )
      currentStartVNode = current[++currentStartIndex]
      updatedEndVNode = updated[--updatedEndIndex]
    } else if (vNodesAreEqual(currentEndVNode, updatedStartVNode)) {
      yield* patchElement(currentEndVNode, updatedStartVNode)
      parentElement.insertBefore(
        yield* getNodeOrThrow(currentEndVNode),
        yield* getNodeOrThrow(currentStartVNode),
      )
      currentEndVNode = current[--currentEndIndex]
      updatedStartVNode = updated[++updatedStartIndex]
    } else {
      if (!mappedKeyToCurrentIndex) {
        mappedKeyToCurrentIndex = mapKeyToCurrentIndex(current, currentStartIndex, currentEndIndex)
      }

      const currentIndexKey = mappedKeyToCurrentIndex.get(getKey(updatedStartVNode))

      if (!currentIndexKey) {
        // new element
        yield* createElement(updatedStartVNode)

        parentElement.insertBefore(
          yield* getNodeOrThrow(updatedStartVNode),
          yield* getNodeOrThrow(currentStartVNode),
        )

        updatedStartVNode = updated[++updatedStartIndex]
      } else {
        const keyedVNode = current[currentIndexKey]

        yield* patchElement(keyedVNode, updatedStartVNode)

        parentElement.insertBefore(
          yield* getNodeOrThrow(keyedVNode),
          yield* getNodeOrThrow(currentStartVNode),
        )

        updatedStartVNode = updated[++updatedStartIndex]
      }
    }
  }

  if (currentStartIndex > currentEndIndex) {
    const referenceNode = updated[updatedEndIndex + 1]
      ? yield* getNodeOrThrow(updated[updatedEndIndex + 1])
      : null
    const vNodes = updated.slice(updatedStartIndex, updatedEndIndex + 1)

    if (vNodes.length > 0) {
      yield* addElements(parentElement, vNodes, referenceNode)
    }
  } else if (updatedStartIndex > updatedEndIndex) {
    const vNodes = current.slice(currentStartIndex, currentEndIndex + 1)

    if (vNodes.length > 0) {
      yield* removeElements(parentElement, vNodes)
    }
  }
}

function mapKeyToCurrentIndex(
  children: VNodeChildren,
  startIndex: number,
  endIndex: number,
): Map<any, any> {
  let index: number = startIndex
  const map: Map<any, any> = new Map()
  let key: any

  for (; index <= endIndex; ++index) {
    key = getKey(children[index])

    if (key) {
      map.set(key, index)
    }
  }

  return map
}
