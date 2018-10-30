import { equals } from '../../logic'
import { diffArrays } from './diffArrays'
import { diffMaps } from './diffMaps'
import { diffObjects } from './diffObjects'
import { stringify } from './helpers'

export function diff<A>(expected: A, actual: A): string {
  if (Array.isArray(expected) && Array.isArray(actual)) {
    return diffArrays(expected, actual)
  }

  if (expected instanceof Set && actual instanceof Set) {
    return `Set ${diffArrays(Array.from(expected), Array.from(actual))}`
  }

  if (expected instanceof Map && actual instanceof Map) {
    return diffMaps(expected, actual)
  }

  if (typeof expected === 'object' && typeof actual === 'object') {
    return diffObjects(expected as any, actual as any)
  }

  if (equals(expected, actual)) {
    return stringify(actual)
  }

  return `${stringify(expected)} !== ${stringify(actual)}`
}
