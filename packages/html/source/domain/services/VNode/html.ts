import { VOID } from '@typed/common'
import {
  HtmlTagName,
  HtmlVNode,
  PropsFrom,
  TagName,
  VNode,
  VNodeChildren,
  VNodeProps,
  VNodeType,
} from '../../model/VNode'

export function html<A extends HtmlTagName, E extends {}, B extends VNodeChildren>(
  tagName: A,
  props: (VNodeProps<E, A> & PropsFrom<A>) | null,
  children: B,
): HtmlVNode<E, A, B> {
  return {
    type: VNodeType.Html,
    tagName,
    props,
    children,
    node: VOID,
    listener: VOID,
  }
}

export function isHtml<
  E extends {} = {},
  A extends TagName = TagName,
  B extends VNodeChildren = VNodeChildren
>(vNode: VNode<E, A, B>): vNode is HtmlVNode<E, A, B> {
  return vNode.type === VNodeType.Html
}
