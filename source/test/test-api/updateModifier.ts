import { Test, TestModifier, TYPED_COLLECTION, TYPED_TEST } from '../types'
import { isTestRunner } from './isTestRunner'

export function updateModifier(modifier: TestModifier, test: Test): Test {
  if (isTestRunner(test)) {
    return { ...test, [TYPED_TEST]: { ...test[TYPED_TEST], modifier } }
  }

  return {
    [TYPED_COLLECTION]: {
      ...test[TYPED_COLLECTION],
      modifier,
    },
  }
}
