import { DomEnv } from '@typed/dom'
import { Effects } from '@typed/effects'
import { PatchEnv } from '@typed/render'
import { ElementVNode, VNode, vNodesAreEqual } from '../domain'
import { createElement } from './createElement'
import { patchElement } from './patchElement'
import { removeElements } from './removeElements'

export function createPatchEnv(): PatchEnv<ElementVNode, VNode> {
  return {
    *patch(elementVNode, vNode): Effects<DomEnv, ElementVNode> {
      if (vNodesAreEqual(elementVNode, vNode)) {
        return yield* patchElement(elementVNode, vNode)
      }

      const element = elementVNode.node
      const parentNode = element.parentNode
      const node = yield* createElement(vNode)

      vNode.node = node

      if (parentNode) {
        parentNode.insertBefore(element.nextSibling)
        yield* removeElements(parentNode, [elementVNode])
      }

      return vNode as ElementVNode
    },
  }
}
