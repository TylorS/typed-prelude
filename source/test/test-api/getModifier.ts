import { Test, TestModifier, TYPED_COLLECTION, TYPED_TEST } from '../types'
import { isTestRunner } from './isTestRunner'

export function getModifier(test: Test): TestModifier {
  if (isTestRunner(test)) {
    return test[TYPED_TEST].modifier
  }

  const { modifier, tests } = test[TYPED_COLLECTION]

  if (modifier !== 'default') {
    return modifier
  }

  if (tests.some(x => getModifier(x) === 'only')) {
    return 'only'
  }

  return tests.every(x => getModifier(x) === 'skip') ? 'skip' : 'default'
}
