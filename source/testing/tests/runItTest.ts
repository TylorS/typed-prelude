import { Assertions, createAssertionsEnvironment } from '@typed/assertions'
import { isPromiseLike } from '@typed/logic'
import { delay } from '@typed/promises'
import { TestResult, TestSpec } from '../types'
import {
  captureStackTrace,
  DoneUsedWithPromiseError,
  NoAssertionError,
  TimeoutError,
} from './errors'

export type Done = (error?: Error) => void
export type TestFn = (assertions: Assertions, done: Done) => any | PromiseLike<any>

export async function runItTest(
  { timeout, skip, testId }: TestSpec,
  test: TestFn,
): Promise<TestResult> {
  if (skip) {
    return { type: 'skip', testId }
  }

  return new Promise<TestResult>(resolve => {
    const { assertions, context } = createAssertionsEnvironment()
    const done: Done = (error?: Error) =>
      error || context.count === 0
        ? resolve({
            type: 'fail',
            error: captureStackTrace(error || new NoAssertionError(), test),
            testId,
          })
        : resolve({ type: 'pass', testId })

    delay(timeout).then(() => done(new TimeoutError(timeout)))

    try {
      const returnedValue = test(assertions, done)
      const isPromise = isPromiseLike(returnedValue)

      if (!isPromise) {
        return done()
      }

      if (test.length === 2) {
        return done(new DoneUsedWithPromiseError())
      }

      return returnedValue.then(() => done(), done)
    } catch (error) {
      done(error)
    }
  })
}
