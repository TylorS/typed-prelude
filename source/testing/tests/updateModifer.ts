import { Test, TestModifier, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'
import { isRunningTest } from './isRunnableTest'

export const skip = (test: Test): Test => updateTestModifer(TestModifier.SKIP, test)
export const only = (test: Test): Test => updateTestModifer(TestModifier.ONLY, test)

export function updateTestModifer(modifier: TestModifier, test: Test): Test {
  if (isRunningTest(test)) {
    const testModifier = getModifier(test)

    if (testModifier !== TestModifier.DEFAULT) {
      return test
    }

    return { ...test, [TYPED_TEST]: { ...test[TYPED_TEST], modifier } }
  }

  const { [TYPED_TEST_COLLECTION]: config, tests, ...rest } = test
  const updatedTests = tests.map(test => updateTestModifer(modifier, test))
  const shouldSkip =
    modifier === TestModifier.SKIP ||
    updatedTests.every(test => getModifier(test) === TestModifier.SKIP)
  const isOnly =
    !shouldSkip &&
    (modifier === TestModifier.ONLY ||
      updatedTests.some(test => getModifier(test) === TestModifier.ONLY))

  const updatedModifer = isOnly ? TestModifier.ONLY : shouldSkip ? TestModifier.SKIP : modifier

  return {
    ...rest,
    [TYPED_TEST_COLLECTION]: { ...test[TYPED_TEST_COLLECTION], modifier: updatedModifer },
    tests: updatedTests,
  }
}

function getModifier(test: Test) {
  const config = isRunningTest(test) ? test[TYPED_TEST] : test[TYPED_TEST_COLLECTION]

  return config.modifier
}
