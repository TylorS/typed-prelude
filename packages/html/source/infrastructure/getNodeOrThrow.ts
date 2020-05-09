import { fail } from '@typed/effects'
import { fromJust, isNothing } from '@typed/maybe'
import { VNode } from '../domain'
import { PatchFailure } from './PatchFailure'

export function* getNodeOrThrow<A extends VNode>({ node }: A) {
  if (isNothing(node.current)) {
    return yield* fail(PatchFailure, new Error(`Unable to find a node`))
  }

  return fromJust(node.current)
}
