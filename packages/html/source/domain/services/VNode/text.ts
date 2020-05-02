import { VOID } from '@typed/common'
import { ComparableValues } from '@typed/lambda'
import { TextVNode, VNode, VNodeType } from '../../model/VNode'

export function text(text: string, key?: ComparableValues): TextVNode {
  return {
    type: VNodeType.Text,
    text,
    key,
    node: VOID,
  }
}
export function isText(vNode: VNode<any, any, any>): vNode is TextVNode {
  return vNode.type === VNodeType.Text
}
