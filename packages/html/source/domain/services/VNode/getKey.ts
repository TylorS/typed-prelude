import { ComparableValues } from '@typed/lambda'
import { HtmlVNode, SvgVNode, VNode } from '../../model'
import { isComment } from './comment'
import { isText } from './text'

export function getKey<A extends VNode>(vNode: A): ComparableValues | null {
  if (isComment(vNode) || isText(vNode)) {
    return vNode.key ?? null
  }

  return (vNode as HtmlVNode | SvgVNode).props?.key ?? null
}
