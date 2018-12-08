import { curry } from '../../lambda'
import { Maybe } from '../../maybe'
import { Test, TYPED_COLLECTION, TYPED_TEST } from '../types'
import { isTestRunner } from './isTestRunner'

export const timeout = curry(
  (timeout: number, test: Test): Test =>
    isTestRunner(test)
      ? { ...test, [TYPED_TEST]: { ...test[TYPED_TEST], timeout: Maybe.of(timeout) } }
      : { ...test, [TYPED_COLLECTION]: { ...test[TYPED_COLLECTION], timeout: Maybe.of(timeout) } },
)
