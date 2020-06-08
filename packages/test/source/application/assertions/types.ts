import { toString } from '@typed/common'
import { Effects, fail, FailEnv } from '@typed/effects'
import * as t from '@typed/io'
import { isNotUndefined } from '@typed/logic'
import { AssertionValue } from '../../domain'
import {
  catchThrownErrorForStackTrace,
  getFirstLineNumber,
  trimStackTraceToStartAtTarget,
} from './helpers'

export const AssertionFailure = Symbol.for('AssertionFailure')
export type AssertionFailure = FailEnv<typeof AssertionFailure, AssertionError>

export type AssertionValueEnv = {
  readonly sendAssertionValue: (value: AssertionValue) => void
}

export type AssertionEnv = AssertionFailure & AssertionValueEnv

export type Assertion<A> = Effects<AssertionEnv, A>

export interface AssertionError extends t.TypeOf<typeof AssertionError> {}
export const AssertionError = t.record({
  name: t.String,
  message: t.String,
  line: t.Number,
  expected: t.String,
  actual: t.String,
  stack: t.String,
})

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
