import { isNotNull } from '@typed/logic'
import { Nothing } from '@typed/maybe'
import {
  CombinedEnvsOf,
  PropsFrom,
  SvgTagName,
  SvgVNode,
  TagName,
  VNode,
  VNodeChildren,
  VNodeProps,
  VNodeType,
} from '../../model/VNode'

export function svg<
  E extends {},
  A extends SvgTagName = SvgTagName,
  B extends ReadonlyArray<VNode | null> = ReadonlyArray<VNode | null>
>(
  tagName: A,
  props: (VNodeProps<E, A> & PropsFrom<A>) | null,
  children: B,
): SvgVNode<E & CombinedEnvsOf<B>, A> {
  return {
    type: VNodeType.Svg,
    tagName,
    props,
    children: children.filter(isNotNull),
    node: props?.ref ?? { current: Nothing },
    listener: { current: Nothing },
  }
}

export function isSvg<
  E extends {} = {},
  A extends TagName = TagName,
  B extends VNodeChildren = VNodeChildren
>(vNode: VNode<E, A, B>): vNode is SvgVNode<E, A, B> {
  return vNode.type === VNodeType.Svg
}
