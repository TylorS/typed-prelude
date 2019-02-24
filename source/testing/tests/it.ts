import { uuid } from '@typed/uuid'
import { Test, TestModifier, TYPED_TEST } from '../types'
import { runItTest, TestFn } from './runItTest'
import { updateTestModifer } from './updateModifer'

export function it(does: string, what: TestFn): Test {
  return {
    [TYPED_TEST]: {
      id: uuid(),
      name: `It ${does}`,
      modifier: TestModifier.DEFAULT,
    },
    runTest: spec => runItTest(spec, what),
  }
}

export namespace it {
  export const only = (does: string, what: TestFn): Test =>
    updateTestModifer(TestModifier.ONLY, it(does, what))

  export const skip = (does: string, what: TestFn): Test =>
    updateTestModifer(TestModifier.SKIP, it(does, what))
}
