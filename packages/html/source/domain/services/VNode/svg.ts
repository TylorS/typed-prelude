import { VOID } from '@typed/common'
import {
  PropsFrom,
  SvgTagName,
  SvgVNode,
  TagName,
  VNode,
  VNodeChildren,
  VNodeProps,
  VNodeType,
} from '../../model/VNode'

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
    node: VOID,
    listener: VOID,
  }
}

export function isSvg<
  E extends {} = {},
  A extends TagName = TagName,
  B extends VNodeChildren = VNodeChildren
>(vNode: VNode<E, A, B>): vNode is SvgVNode<E, A, B> {
  return vNode.type === VNodeType.Svg
}
