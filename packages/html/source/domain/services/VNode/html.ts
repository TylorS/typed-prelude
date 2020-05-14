import { isNotNull } from '@typed/logic'
import { Nothing } from '@typed/maybe'
import {
  CombinedEnvsOf,
  HtmlTagName,
  HtmlVNode,
  PropsFrom,
  VNode,
  VNodeProps,
  VNodeType,
} from '../../model/VNode'

export function html<
  E extends {},
  A extends HtmlTagName = HtmlTagName,
  B extends ReadonlyArray<VNode | null> = ReadonlyArray<VNode | null>
>(
  tagName: A,
  props: (VNodeProps<E, A> & PropsFrom<A>) | null,
  children: B,
): HtmlVNode<E & CombinedEnvsOf<B>, A> {
  return {
    type: VNodeType.Html,
    tagName,
    props,
    children: children.filter(isNotNull),
    node: props?.ref ?? { current: Nothing },
    listener: { current: Nothing },
  }
}

export function isHtml(vNode: VNode): vNode is HtmlVNode {
  return vNode.type === VNodeType.Html
}
