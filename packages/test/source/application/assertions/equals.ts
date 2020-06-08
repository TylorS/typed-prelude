import { curry } from '@typed/lambda'
import * as L from '@typed/logic'
import { toString } from '@typed/strings'
import { sendAssertionValue } from './sendAssertionValue'
import { Assertion, assertionFailure } from './types'

export const equals: {
  <A>(expected: A, actual: A): Assertion<A>
  <A>(expected: A): (actual: A) => Assertion<A>
} = curry(__equals)

function* __equals<A>(expected: A, actual: A): Assertion<A> {
  if (L.equals(expected, actual)) {
    yield* sendAssertionValue(toString(actual), equals)

    return actual
  }

  return yield* assertionFailure(`Expected to be equal`, expected, actual, equals)
}
