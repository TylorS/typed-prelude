import { ComparableValues } from '@typed/lambda'
import { Nothing } from '@typed/maybe'
import { CommentVNode, VNode, VNodeType } from '../../model/VNode'

export function comment(comment: string, key?: ComparableValues): CommentVNode {
  return {
    type: VNodeType.Comment,
    comment,
    key,
    node: { current: Nothing },
  }
}

export function isComment(vNode: VNode<any, any, any>): vNode is CommentVNode {
  return vNode.type === VNodeType.Comment
}
