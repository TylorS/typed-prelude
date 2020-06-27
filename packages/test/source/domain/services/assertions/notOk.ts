import { Assertion } from '../../model'
import { assertionFailure } from './assertionFailure'
import { sendAssertionValue } from './sendAssertionValue'

export function* notOk(bool: boolean): Assertion<boolean> {
  if (!bool) {
    yield* sendAssertionValue('false', notOk)

    return bool
  }

  return yield* assertionFailure(`Expected to be false`, false, true, notOk)
}
