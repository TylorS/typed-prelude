import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'
import { toString } from '@typed/strings'
import { sendAssertionValue } from './sendAssertionValue'
import { Assertion, assertionFailure } from './types'

export const notEquals = curry(__notEquals) as {
  <A>(expected: any, actual: A): Assertion<A>
  (expected: any): <A>(actual: A) => Assertion<A>
}

function* __notEquals<A>(expected: any, actual: A): Assertion<A> {
  if (equals(expected, actual)) {
    return yield* assertionFailure(`Expected to not be equal`, expected, actual, notEquals)
  }

  yield* sendAssertionValue(toString(actual), notEquals)

  return actual
}
