import { DomEnv } from '@typed/dom'
import { combine, Effects } from '@typed/effects'
import { pipeline } from '@typed/lambda'
import { dissoc } from '@typed/objects'
import {
  diffRecordMap,
  ElementTypes,
  ElementVNode,
  EnvOf,
  HtmlElementVNode,
  isComment,
  isHtml,
  isSvg,
  isText,
  PatchElement,
  RecordDiff,
  SvgElementVNode,
  ToElement,
  VNode,
  vNodesAreEqual,
} from '../domain'
import { addElements } from './addElements'
import { createElement } from './createElement'
import { removeElements } from './removeElements'
import { updateAriaAttributes } from './updateAriaAttributes'
import { updateAttributes } from './updateAttributes'
import { updateChildren } from './updateChildren'
import { updateDataList } from './updateDataList'
import { updateEventHandlers } from './updateEventHandlers'
import { updateProperties } from './updateProperties'

const EMPTY = {}

export const patchElement: PatchElement<DomEnv> = function* <
  A extends ElementVNode,
  B extends VNode
>(elementVNode: A, vNode: B): Effects<DomEnv & EnvOf<A> & EnvOf<B>, ToElement<B>> {
  if (!vNodesAreEqual(elementVNode, vNode)) {
    return yield* replacePreviousElement(elementVNode, vNode)
  }

  const node = (vNode.node = elementVNode.node)

  if (isText(vNode) && vNode.text !== node.textContent) {
    node.textContext = vNode.text
  }

  if (isComment(vNode) && node.textContext !== vNode.comment) {
    node.textContent = vNode.comment
  }

  if (isSvg(vNode) || isHtml(vNode)) {
    ;(vNode as ElementTypes).listener = (elementVNode as ElementTypes).listener

    yield* updateElement(elementVNode as ElementTypes, vNode as ElementTypes)
  }

  return (vNode as any) as ToElement<B>
}

function* replacePreviousElement<A extends ElementVNode, B extends VNode>(
  elementVNode: A,
  vNode: B,
): Effects<EnvOf<A> & EnvOf<B>, ToElement<B>> {
  const { node } = elementVNode
  const parentNode = node.parentNode!
  const created = yield* createElement(vNode)

  parentNode.insertBefore(created, node)
  parentNode.removeChild(node)

  vNode.node = node

  return vNode as any
}

function* updateElement<
  A extends HtmlElementVNode | SvgElementVNode,
  B extends HtmlElementVNode | SvgElementVNode
>(elementVNode: A, vNode: B) {
  const previousProps = elementVNode.props || {}
  const currentProps = vNode.props || {}

  yield* combine(
    updateAriaAttributes(
      vNode,
      diffRecordMap(previousProps?.aria ?? EMPTY, currentProps?.aria ?? EMPTY),
    ),
    updateAttributes(
      vNode,
      diffRecordMap(previousProps?.attrs ?? EMPTY, currentProps?.attrs ?? EMPTY),
    ),
    updateDataList(vNode, diffRecordMap(previousProps?.data ?? EMPTY, currentProps?.data ?? EMPTY)),
    updateEventHandlers(
      vNode,
      diffRecordMap(previousProps?.on ?? EMPTY, currentProps?.on ?? EMPTY),
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

function* patchChildren<
  A extends HtmlElementVNode | SvgElementVNode,
  B extends HtmlElementVNode | SvgElementVNode
>(elementVNode: A, vNode: B) {
  const previousChildren = elementVNode.children
  const currentChildren = vNode.children
  const { node } = vNode

  if (
    previousChildren.length > 0 &&
    currentChildren.length > 0 &&
    previousChildren !== currentChildren
  ) {
    yield* updateChildren(node, previousChildren, currentChildren)
  } else if (currentChildren.length > 0) {
    yield* addElements(node, currentChildren, null)
  } else if (previousChildren.length > 0) {
    yield* removeElements(node, previousChildren)
  }

  return
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
