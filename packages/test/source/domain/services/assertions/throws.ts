import { toString } from '@typed/strings'
import { Assertion } from '../../model'
import { assertionFailure } from './assertionFailure'
import { sendAssertionValue } from './sendAssertionValue'

export function* throws(fn: (() => any) | (() => never)): Assertion<unknown> {
  try {
    return yield* assertionFailure(`Expected to throw`, null, fn(), throws)
  } catch (error) {
    yield* sendAssertionValue(toString(error), throws)

    return error
  }
}
