import { Uuid } from '@typed/uuid'
import { Test, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'
import { isRunningTest } from './isRunnableTest'

export const getTestId = (test: Test): Uuid =>
  isRunningTest(test) ? test[TYPED_TEST].id : test[TYPED_TEST_COLLECTION].id
