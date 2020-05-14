import { Effects, fail } from '@typed/effects'
import { fromJust, isNothing } from '@typed/maybe'
import { NodeOf, VNode } from '../domain'
import { PatchFailure } from './PatchFailure'

export function* getNodeOrThrow<A extends VNode>({ node }: A): Effects<PatchFailure, NodeOf<A>> {
  if (isNothing(node.current)) {
    return yield* fail(PatchFailure, new Error(`Unable to find a node`))
  }

  return fromJust(node.current)
}
