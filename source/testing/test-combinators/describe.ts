import { uuid } from '@typed/uuid'
import { Test, TestModifier, TYPED_TEST_COLLECTION } from '../types'
import { updateTestModifer } from './updateModifer'

export function describe(what: string, tests: Test[]): Test {
  return {
    [TYPED_TEST_COLLECTION]: {
      id: uuid(),
      name: `Describe ${what}`,
      modifier: TestModifier.DEFAULT,
    },
    tests,
  }
}

export namespace describe {
  export const only = (what: string, tests: Test[]): Test =>
    updateTestModifer(TestModifier.ONLY, describe(what, tests))

  export const skip = (what: string, tests: Test[]): Test =>
    updateTestModifer(TestModifier.SKIP, describe(what, tests))
}
