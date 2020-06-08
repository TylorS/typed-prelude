import { sendAssertionValue } from './sendAssertionValue'
import { Assertion, assertionFailure } from './types'

export function* notOk(bool: boolean): Assertion<boolean> {
  if (!bool) {
    yield* sendAssertionValue('false', notOk)

    return bool
  }

  return yield* assertionFailure(`Expected to be false`, false, true, notOk)
}
