import { DomEnv } from '@typed/dom'
import { Effects } from '@typed/effects'
import { Just } from '@typed/maybe'
import {
  ElementTypes,
  EnvOf,
  isComment,
  isHtml,
  isSvg,
  isText,
  PatchElement,
  VNode,
  vNodesAreEqual,
} from '../domain'
import { createElement } from './createElement'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'
import { updateElement } from './updateElement'

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
