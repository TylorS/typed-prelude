import { VNode } from '../../model'
import { getKey } from '../getKey'

export function vNodesAreEqual<A extends VNode, B extends VNode>(a: A, b: B): boolean {
  // This is what validates the unfortunate type-casting below
  return a.type === b.type && getKey(a) === getKey(b)
}
