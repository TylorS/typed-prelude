import { equals } from '../../common/equals'
import { join } from '../../list/join'
import { length } from '../../list/length'
import { map } from '../../list/map'
import { addedValue, isEmpty, isObject, removedValue, stringify } from './helpers'

export function diffArrays<A extends any[]>(expected: A, actual: A): string {
  if (equals(expected, actual)) {
    return stringify(actual)
  }

  if (isEmpty(expected)) {
    return wrapInBraces(join('', map(addedValue, actual)))
  }

  if (isEmpty(actual)) {
    return wrapInBraces(join('', map(removedValue, expected)))
  }

  const count = Math.max(length(expected), length(actual))

  let str = ''

  for (let i = 0; i < count; ++i) {
    const expectedValue = expected[i]
    const actualValue = actual[i]

    const expectedPadding = isObject(expectedValue) ? 2 : 0
    const actualPadding = isObject(actualValue) ? 2 : 0

    if (equals(expectedValue, actualValue)) {
      str += `  ${stringify(actualValue)}`
    } else if (i >= length(expected)) {
      str += addedValue(actualValue, actualPadding)
    } else if (i >= length(actual)) {
      str += removedValue(expectedValue, expectedPadding)
    } else {
      str += removedValue(expectedValue, expectedPadding) + addedValue(actualValue, actualPadding)
    }
  }

  return wrapInBraces(str)
}

function wrapInBraces(values: string): string {
  return `[\n` + values + `]`
}
