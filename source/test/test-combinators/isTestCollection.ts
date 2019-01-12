import { Test, TestCollection, TYPED_TEST_COLLECTION } from '../types'

export function isTestCollection(test: Test): test is TestCollection {
  return test.hasOwnProperty(TYPED_TEST_COLLECTION)
}
