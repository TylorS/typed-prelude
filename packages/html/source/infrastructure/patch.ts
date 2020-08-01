import { DomEnv } from '@typed/dom'
import { Effects, Fail } from '@typed/effects'
import { PatchEnv } from '@typed/render'
import { VNode, vNodesAreEqual } from '../domain'
import { createElement } from './createElement'
import { getNodeOrThrow } from './getNodeOrThrow'
import { patchElement } from './patchElement'
import { PatchFailure } from './PatchFailure'
import { removeElements } from './removeElements'

export function createPatchEnv(
  fail: Fail<Error> = Fail,
): PatchEnv<VNode, VNode, DomEnv & PatchFailure> & PatchFailure {
  return {
    *patch(elementVNode, vNode): Effects<DomEnv & PatchFailure, VNode> {
      if (vNodesAreEqual(elementVNode, vNode)) {
        yield* patchElement(elementVNode, vNode)
      } else {
        const element = yield* getNodeOrThrow(elementVNode)
        const parentNode = element.parentNode

        yield* createElement(vNode)

        if (parentNode) {
          parentNode.insertBefore(yield* getNodeOrThrow(vNode), element.nextSibling)
          yield* removeElements(parentNode, [elementVNode])
        }
      }

      return vNode
    },
    [PatchFailure]: fail,
  }
}
