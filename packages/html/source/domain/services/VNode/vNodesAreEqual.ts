import { ElementTypes, VNode } from '../../model/VNode'
import { getKey } from './getKey'
import { isHtml } from './html'
import { isSvg } from './svg'

export function vNodesAreEqual<A extends VNode, B extends VNode>(a: A, b: B): boolean {
  const isEqual = a.type === b.type && getKey(a) === getKey(b)

  if (isHtml(a) || isSvg(a)) {
    return isEqual && a.tagName === (b as ElementTypes).tagName
  }

  return isEqual
}
