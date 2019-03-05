import { Test, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'
import { isRunningTest } from './isRunnableTest'

export function timeout(ms: number, tests: Test[]): Test[] {
  return tests.map(test => updateTimeout(test, ms))
}

function updateTimeout(test: Test, timeout: number): Test {
  if (isRunningTest(test)) {
    const { [TYPED_TEST]: config } = test

    return { ...test, [TYPED_TEST]: { ...config, timeout } }
  }

  const { [TYPED_TEST_COLLECTION]: config } = test

  return { ...test, [TYPED_TEST_COLLECTION]: { ...config, timeout } }
}
