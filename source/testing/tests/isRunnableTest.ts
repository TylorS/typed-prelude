import { TYPED_TEST } from '@typed/test'
import { RunningTest, Test } from '../types'

export function isRunningTest(test: Test): test is RunningTest {
  return test.hasOwnProperty(TYPED_TEST)
}
