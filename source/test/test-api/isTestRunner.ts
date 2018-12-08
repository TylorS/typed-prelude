import { Test, TestRunner, TYPED_TEST } from '../types'

export function isTestRunner(test: Test): test is TestRunner {
  return !!(test as TestRunner)[TYPED_TEST]
}
