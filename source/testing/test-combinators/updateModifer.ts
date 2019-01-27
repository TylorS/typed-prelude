import { Test, TestModifier, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'
import { isRunningTest } from './isRunnableTest'

export const skip = (test: Test): Test => updateTestModifer(TestModifier.SKIP, test)
export const only = (test: Test): Test => updateTestModifer(TestModifier.ONLY, test)

export function updateTestModifer(modifier: TestModifier, test: Test): Test {
  return isRunningTest(test)
    ? { ...test, [TYPED_TEST]: { ...test[TYPED_TEST], modifier } }
    : {
        ...test,
        [TYPED_TEST_COLLECTION]: { ...test[TYPED_TEST_COLLECTION], modifier },
        tests: test.tests.map(x => updateTestModifer(modifier, x)),
      }
}
