import { DomEnv } from '@typed/dom'
import { get } from '@typed/effects'
import { Just } from '@typed/maybe'
import {
  CommentVNode,
  CreateElement,
  HtmlVNode,
  isHtml,
  isSvg,
  isText,
  NodeOf,
  VNode,
} from '../domain'
import { SVG_NAMESPACE } from './constants'

export const createElement: CreateElement<DomEnv> = function* <A extends VNode>(vNode: A) {
  const { document } = yield* get()
  const node = (isHtml(vNode)
    ? document.createElement(vNode.tagName)
    : isSvg(vNode)
    ? document.createElementNS(SVG_NAMESPACE, vNode.tagName)
    : isText(vNode)
    ? document.createTextNode(vNode.text)
    : document.createComment((vNode as CommentVNode).comment)) as NodeOf<A>

  if ((vNode as HtmlVNode<any, any, any>).props?.ref) {
    ;(vNode as HtmlVNode<any, any, any>).props!.ref!.current = Just.of(node)
  }

  return node
}
