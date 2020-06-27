import { Assertion } from '../../model'
import { assertionFailure } from './assertionFailure'
import { sendAssertionValue } from './sendAssertionValue'

export function* ok(bool: boolean): Assertion<boolean> {
  if (bool) {
    yield* sendAssertionValue('true', ok)

    return bool
  }

  return yield* assertionFailure(`Expected to be true`, true, false, ok)
}
