import {
  PropsFrom,
  SvgTagName,
  SvgVNode,
  VNodeChildren,
  VNodeProps,
  VNodeType,
} from '../model/VNode'

export function svg<A extends SvgTagName, E extends {}, B extends VNodeChildren>(
  tagName: A,
  props: (VNodeProps<E, A> & PropsFrom<A>) | null,
  children: B,
): SvgVNode<E, A, B> {
  return {
    type: VNodeType.Svg,
    tagName,
    props,
    children,
    element: undefined,
  }
}
