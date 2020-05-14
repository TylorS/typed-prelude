import { ComparableValues } from '@typed/lambda'
import { Nothing } from '@typed/maybe'
import { TextVNode, VNode, VNodeType } from '../../model/VNode'

export function text(text: string, key?: ComparableValues): TextVNode {
  return {
    type: VNodeType.Text,
    text,
    key,
    node: { current: Nothing },
  }
}
export function isText(vNode: VNode): vNode is TextVNode {
  return vNode.type === VNodeType.Text
}
