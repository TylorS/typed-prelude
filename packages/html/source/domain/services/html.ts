import {
  HtmlTagName,
  HtmlVNode,
  PropsFrom,
  VNodeChildren,
  VNodeProps,
  VNodeType,
} from '../model/VNode'

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
    element: undefined,
  }
}
