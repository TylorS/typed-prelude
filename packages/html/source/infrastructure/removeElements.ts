import { Nothing } from '@typed/maybe'
import { ElementVNode, isHtml, isSvg, RemoveElements } from '../domain'

export const removeElements: RemoveElements<{}> = function* (parentNode, vNodes) {
  for (const vNode of vNodes) {
    removeRef(vNode)

    parentNode.removeChild(vNode.node)
  }
}

function removeRef(vNode: ElementVNode) {
  if ((isHtml(vNode) || isSvg(vNode)) && !!vNode.props?.ref) {
    vNode.props.ref.current = Nothing
  }
}
