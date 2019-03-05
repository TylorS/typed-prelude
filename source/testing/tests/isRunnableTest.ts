import { RunningTest, Test, TYPED_TEST } from '../types'

export function isRunningTest(test: Test): test is RunningTest {
  return !!(test as RunningTest)[TYPED_TEST]
}
