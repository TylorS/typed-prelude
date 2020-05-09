import { DomEnv } from '@typed/dom'
import { combine, Effects } from '@typed/effects'
import { pipeline } from '@typed/lambda'
import { Just } from '@typed/maybe'
import { dissoc } from '@typed/objects'
import {
  diffAttributes,
  diffRecordMap,
  ElementTypes,
  EnvOf,
  getKey,
  isComment,
  isHtml,
  isSvg,
  isText,
  PatchElement,
  RecordDiff,
  UpdateChildren,
  VNode,
  VNodeChildren,
  vNodesAreEqual,
} from '../domain'
import { addElements, createElement } from './createElement'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'
import { removeElements } from './removeElements'
import { updateAriaAttributes } from './updateAriaAttributes'
import { updateAttributes } from './updateAttributes'
import { updateDataList } from './updateDataList'
import { updateEventHandlers } from './updateEventHandlers'
import { updateProperties } from './updateProperties'

const EMPTY: any = {}

export const patchElement: PatchElement<DomEnv & PatchFailure> = function* <
  A extends VNode,
  B extends VNode
>(elementVNode: A, vNode: B) {
  if (!vNodesAreEqual(elementVNode, vNode)) {
    return yield* replacePreviousElement(elementVNode, vNode)
  }

  const node = yield* getNodeOrThrow(elementVNode)

  vNode.node.current = Just.of(node)

  if (elementVNode === (vNode as any)) {
    return
  }

  if (isText(vNode) && node.nodeValue !== vNode.text) {
    node.nodeValue = vNode.text
  }

  if (isComment(vNode) && node.nodeValue !== vNode.comment) {
    node.nodeValue = vNode.comment
  }

  if (isSvg(vNode) || isHtml(vNode)) {
    vNode.listener.current = (elementVNode as ElementTypes).listener.current

    yield* updateElement(elementVNode as ElementTypes, vNode)
  }
}

function* replacePreviousElement<A extends VNode, B extends VNode>(
  elementVNode: A,
  vNode: B,
): Effects<PatchFailure & EnvOf<A> & EnvOf<B>, void> {
  const node = yield* getNodeOrThrow(elementVNode)
  const parentNode = node.parentNode!

  if (isSvg(vNode) || isHtml(vNode)) {
    node.textContent = ''
  }

  yield* createElement(vNode)

  parentNode.insertBefore(yield* getNodeOrThrow(vNode), node)
  parentNode.removeChild(node)
}

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

function* updateElement<A extends ElementTypes, B extends ElementTypes>(elementVNode: A, vNode: B) {
  const previousProps = elementVNode.props ?? EMPTY
  const currentProps = vNode.props ?? EMPTY

  yield* combine(
    updateAriaAttributes(
      vNode,
      diffRecordMap(previousProps?.aria ?? EMPTY, currentProps?.aria ?? EMPTY),
    ),
    updateAttributes(
      vNode,
      diffAttributes(previousProps?.attrs ?? EMPTY, currentProps?.attrs ?? EMPTY),
    ),
    updateDataList(vNode, diffRecordMap(previousProps?.data ?? EMPTY, currentProps?.data ?? EMPTY)),
    updateEventHandlers(
      vNode,
      diffRecordMap(previousProps?.on ?? EMPTY, currentProps?.on ?? EMPTY) as RecordDiff<any, any>,
    ),
    updateProperties(
      vNode,
      diffRecordMap(
        removeReservedProps(previousProps),
        removeReservedProps(currentProps),
      ) as RecordDiff<any, any>,
    ),
    patchChildren(elementVNode, vNode),
  )
}

function* patchChildren<A extends ElementTypes, B extends ElementTypes>(elementVNode: A, vNode: B) {
  const node = yield* getNodeOrThrow(vNode)
  const { children: currentChildren } = vNode
  const { children: previousChildren } = elementVNode
  const { length: numberOfPreviousChildren } = previousChildren
  const { length: numberOfCurrentChildren } = currentChildren
  const addedElements = numberOfCurrentChildren > 0 && numberOfPreviousChildren === 0
  const removedElements = numberOfPreviousChildren > 0 && numberOfCurrentChildren === 0
  const updatedElements =
    numberOfPreviousChildren > 0 &&
    numberOfCurrentChildren > 0 &&
    previousChildren !== currentChildren

  if (addedElements) {
    yield* addElements(node, currentChildren, null)
  } else if (removedElements) {
    yield* removeElements(node, previousChildren)
  } else if (updatedElements) {
    yield* updateChildren(node, previousChildren, currentChildren)
  }
}

function removeReservedProps<A extends {}>(a: A) {
  return pipeline<A, Record<string, any>>(
    a,
    dissoc('aria'),
    dissoc('attrs'),
    dissoc('data'),
    dissoc('on'),
    dissoc('key'),
    dissoc('ref'),
  )
}
