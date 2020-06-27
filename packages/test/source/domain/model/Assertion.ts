import { Effects, FailEnv } from '@typed/effects'
import * as t from '@typed/io'

export type AssertionEnv = AssertionFailure & AssertionValueEnv

export type Assertion<A> = Effects<AssertionEnv, A>

export const AssertionFailure = Symbol.for('AssertionFailure')
export type AssertionFailure = FailEnv<typeof AssertionFailure, AssertionError>

export type AssertionValueEnv = {
  readonly sendAssertionValue: (value: AssertionValue) => void
}

export const AssertionValue = t.record({
  value: t.String,
  line: t.Number,
})
export type AssertionValue = t.TypeOf<typeof AssertionValue>

export interface AssertionError extends t.TypeOf<typeof AssertionError> {}
export const AssertionError = t.record({
  name: t.String,
  message: t.String,
  line: t.Number,
  expected: t.String,
  actual: t.String,
  stack: t.String,
})
