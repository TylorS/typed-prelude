import { Nothing } from '@typed/maybe'
import { diffRecordMap, isHtml, isSvg, RemoveElements } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'
import { updateEventHandlers } from './updateEventHandlers'

const EMPTY: any = {}

export const removeElements: RemoveElements<PatchFailure> = function* (parentNode, vNodes) {
  for (const vNode of vNodes) {
    const node = yield* getNodeOrThrow(vNode)

    vNode.node.current = Nothing

    parentNode.removeChild(node)

    if ((isHtml(vNode) || isSvg(vNode)) && vNode.props && vNode.props.on) {
      yield* updateEventHandlers(vNode, diffRecordMap<any, any>(vNode.props.on, EMPTY))
      vNode.listener.current = Nothing
    }
  }
}
