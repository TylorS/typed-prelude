import { sendAssertionValue } from './sendAssertionValue'
import { Assertion, assertionFailure } from './types'

export function* ok(bool: boolean): Assertion<boolean> {
  if (bool) {
    yield* sendAssertionValue('true', ok)

    return bool
  }

  return yield* assertionFailure(`Expected to be true`, true, false, ok)
}
