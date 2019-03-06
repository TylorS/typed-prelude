import { Test, TestConfig, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'
import { isRunningTest } from './isRunnableTest'

export function getTestConfig(test: Test): TestConfig {
  return isRunningTest(test) ? test[TYPED_TEST] : test[TYPED_TEST_COLLECTION]
}
