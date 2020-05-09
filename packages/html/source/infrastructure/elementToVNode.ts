import { combine, Effects } from '@typed/effects'
import { map } from '@typed/list'
import { Just } from '@typed/maybe'
import {
  comment,
  ElementToVNode,
  html,
  HtmlTagName,
  svg,
  SvgTagName,
  text,
  VNode,
  VNodeChildren,
} from '../domain'
import { SVG_NAMESPACE } from './constants'

const EMPTY: VNodeChildren = []

export const elementToVNode: ElementToVNode<unknown> = function* (
  node: Text | Comment | HTMLElement | SVGElement,
): Effects<unknown, VNode> {
  if (isTextNode(node)) {
    const vNode = text(node.textContent ?? '')

    vNode.node.current = Just.of(node)

    return vNode
  }

  if (isCommentNode(node)) {
    const vNode = comment(node.textContent ?? '')

    vNode.node.current = Just.of(node)

    return vNode
  }

  const props = { id: node.id, className: node.className }
  const children: VNodeChildren =
    node.childNodes.length === 0
      ? EMPTY
      : yield* combine(
          ...map(
            elementToVNode,
            node.childNodes as NodeListOf<Text | Comment | HTMLElement | SVGElement>,
          ),
        )
  const vNode = isSvgElement(node)
    ? svg(node.tagName.toLowerCase() as SvgTagName, props, children)
    : html(node.tagName.toLowerCase() as HtmlTagName, props, children)

  vNode.node.current = Just.of(node as any)

  return vNode
}

function isTextNode(node: Text | Comment | HTMLElement | SVGElement): node is Text {
  return node.nodeType === Node.TEXT_NODE
}

function isCommentNode(node: Text | Comment | HTMLElement | SVGElement): node is Comment {
  return node.nodeType === Node.COMMENT_NODE
}

function isSvgElement(node: Text | Comment | HTMLElement | SVGElement): node is SVGElement {
  return node.namespaceURI === SVG_NAMESPACE
}
