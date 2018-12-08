import { Test, TestCollection, TYPED_COLLECTION } from '../types'

export function isTestCollection(test: Test): test is TestCollection {
  return !!(test as TestCollection)[TYPED_COLLECTION]
}
