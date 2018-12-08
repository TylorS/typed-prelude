import { Assertions, createAssertionEnvironment } from '../../assertions'
import { Nothing } from '../../maybe'
import { toString } from '../../strings'
import { RunnerTestResult, Test, TestConfig, TestRunner, TYPED_TEST } from '../types'
import { TestOptions } from '../types'
import { updateModifier } from './updateModifier'

export function it(
  does: string,
  what: (assertions: Assertions, done: (error?: Error) => void) => any,
): Test {
  const config: TestConfig = {
    name: `it ${does}`,
    modifier: 'default',
    timeout: Nothing,
  }

  function runTest(options: TestOptions): Promise<RunnerTestResult> {
    const { timeout, skip } = options

    if (skip) {
      return Promise.resolve<RunnerTestResult>({ ...config, type: 'skip' })
    }

    const { context, assertions } = createAssertionEnvironment()

    return new Promise<RunnerTestResult>(resolve => {
      const id = setTimeout(resolve, timeout, {
        ...config,
        type: 'fail',
        error: new Error(`Test timed out after ${timeout}ms`),
      })

      function done(error?: Error): void {
        clearTimeout(id)

        if (error === undefined && context.count > 0) {
          return resolve({
            ...config,
            type: 'pass',
          })
        }

        const testError = error
          ? error instanceof Error
            ? error
            : new Error(toString(error))
          : new Error('No Assertions used')

        return resolve({
          ...config,
          type: 'fail',
          error: testError,
        })
      }

      if (what.length === 0) {
        return done()
      }

      try {
        const returnValue = what(assertions, done)
        const isPromise = returnValue && typeof (returnValue as Promise<any>).then === 'function'

        if (!isPromise && what.length === 1) {
          return done()
        }

        if (isPromise && what.length === 2) {
          return done(new Error('Cannot use done callback and return Promise'))
        }

        if (isPromise) {
          return returnValue.then(() => done(), done)
        }
      } catch (err) {
        done(err)
      }
    })
  }

  const test: TestRunner = {
    [TYPED_TEST]: config,
    runTest,
  }

  return test
}

export namespace it {
  export function only(
    does: string,
    what: (assertions: Assertions, done: (error?: Error) => void) => any,
  ): Test {
    return updateModifier('only', it(does, what))
  }

  export function skip(
    does: string,
    what: (assertions: Assertions, done: (error?: Error) => void) => any,
  ): Test {
    return updateModifier('skip', it(does, what))
  }
}
