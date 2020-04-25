import { CommentVNode, VNodeType } from '../model/VNode'

export function comment(comment: string): CommentVNode {
  return {
    type: VNodeType.Comment,
    comment,
    node: undefined,
  }
}
