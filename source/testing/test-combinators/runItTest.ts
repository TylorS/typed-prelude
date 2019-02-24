import { Assertions, createAssertionEnvironment } from '@typed/assertions'
import { isPromiseLike } from '@typed/logic'
import { TestResult, TestSpec } from '../types'

export type Done = (error?: Error) => void
export type TestFn = (assertions: Assertions, done: Done) => any | PromiseLike<any>

export const TimeoutError = new Error('Test Timeout')
export const NoAssertionError = new Error('No Assertion Used')
export const DoneUsedWithPromiseError = new Error('Done used with Promise')

export async function runItTest(
  { timeout, skip, testId }: TestSpec,
  test: TestFn,
): Promise<TestResult> {
  if (skip) {
    return { type: 'skip', testId }
  }

  return new Promise<TestResult>(resolve => {
    const { assertions, context } = createAssertionEnvironment()
    const done: Done = (error?: Error) =>
      error || context.count === 0
        ? resolve({ type: 'fail', error: error || NoAssertionError, testId })
        : resolve({ type: 'pass', testId })

    delay(timeout).then(() => done(TimeoutError))
    const returnedValue = test(assertions, done)
    const isPromise = isPromiseLike(returnedValue)

    if (!isPromise) {
      return done()
    }

    if (test.length === 2) {
      return done(DoneUsedWithPromiseError)
    }

    return returnedValue.then(() => done())
  })
}
