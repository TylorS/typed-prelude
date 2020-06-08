import { toString } from '@typed/strings'
import { sendAssertionValue } from './sendAssertionValue'
import { Assertion, assertionFailure } from './types'

export function* throws(fn: (() => any) | (() => never)): Assertion<unknown> {
  try {
    return yield* assertionFailure(`Expected to throw`, null, fn(), throws)
  } catch (error) {
    yield* sendAssertionValue(toString(error), throws)

    return error
  }
}
