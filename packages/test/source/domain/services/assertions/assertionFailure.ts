import { fail } from '@typed/effects'
import { isNotUndefined } from '@typed/logic'
import { toString } from '@typed/strings'
import { Assertion, AssertionError, AssertionFailure } from '../../model'
import {
  catchThrownErrorForStackTrace,
  getFirstLineNumber,
  trimStackTraceToStartAtTarget,
} from './helpers'

export const assertionFailure = <A>(
  message: string,
  expected: A,
  actual: A,
  target?: Function,
): Assertion<A> =>
  fail<typeof AssertionFailure, AssertionError>(
    AssertionFailure,
    createAssertionError(message, toString(expected), toString(actual), target),
  )

export const createAssertionError = (
  message: string,
  expected: string,
  actual: string,
  target?: Function,
) => {
  return catchThrownErrorForStackTrace(new Implementation(message, expected, actual, target))
}

class Implementation extends Error implements AssertionError {
  public readonly name = `AssertionError`
  public readonly stack!: string
  public readonly line: number

  constructor(
    readonly message: string,
    readonly expected: string,
    readonly actual: string,
    target?: Function,
  ) {
    super(message)

    if (isNotUndefined(target)) {
      trimStackTraceToStartAtTarget(this, target)
    }

    this.line = getFirstLineNumber(this)
  }
}
