import { uuid } from '@typed/uuid'
import { Test, TestModifier, TYPED_TEST_COLLECTION } from '../types'
import { updateTestModifer } from './updateModifer'

export function given(what: string, tests: Test[]): Test {
  return updateTestModifer(TestModifier.DEFAULT, __given(what, tests))
}

export namespace given {
  export const only = (what: string, tests: Test[]): Test =>
    updateTestModifer(TestModifier.ONLY, __given(what, tests))

  export const skip = (what: string, tests: Test[]): Test =>
    updateTestModifer(TestModifier.SKIP, __given(what, tests))
}

function __given(what: string, tests: Test[]): Test {
  return {
    [TYPED_TEST_COLLECTION]: {
      id: uuid(),
      name: `Given ${what}`,
      modifier: TestModifier.DEFAULT,
    },
    tests,
  }
}
