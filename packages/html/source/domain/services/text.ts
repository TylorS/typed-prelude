import { TextVNode, VNodeType } from '../model/VNode'

export function text(text: string): TextVNode {
  return {
    type: VNodeType.Text,
    text,
    node: undefined,
  }
}
