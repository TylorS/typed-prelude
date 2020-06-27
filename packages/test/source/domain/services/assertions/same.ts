import { curry } from '@typed/lambda'
import { toString } from '@typed/strings'
import { Assertion } from '../../model'
import { assertionFailure } from './assertionFailure'
import { sendAssertionValue } from './sendAssertionValue'

export const same: {
  <A>(expected: A, actual: A): Assertion<A>
  <A>(expected: A): (actual: A) => Assertion<A>
} = curry(__same)

function* __same<A>(expected: A, actual: A): Assertion<A> {
  if (expected === actual) {
    yield* sendAssertionValue(toString(actual), same)

    return actual
  }

  return yield* assertionFailure(`Expected to be same`, expected, actual, same)
}
