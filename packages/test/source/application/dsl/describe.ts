import { isFunction } from '@typed/logic'
import { Nothing } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import { uuidEnv } from '../../common/uuidEnv'
import {
  DefaultTestModifier,
  OnlyTestModifier,
  SkipTestModifier,
  TestConfig,
  Tests,
  TestSuite,
  TodoTestModifier,
  updateModifier,
} from '../../domain'
import { describeTestName } from './helpers'

export function describe<A extends string, B extends Tests>(
  what: A,
  setup: B | (() => B),
): TestSuite<TestConfig<A, number, typeof DefaultTestModifier.value>, B> {
  return {
    type: 'suite',
    config: {
      id: uuid4(uuidEnv.randomUuidSeed()),
      name: describeTestName(what),
      timeout: Nothing,
      modifier: DefaultTestModifier.value,
    },
    tests: isFunction(setup) ? setup() : setup,
  } as const
}

export namespace describe {
  export const only = <A extends string, B extends Tests>(what: A, setup: B | (() => B)) =>
    updateModifier(OnlyTestModifier.value, describe(what, setup))

  export const todo = <A extends string, B extends Tests>(what: A, setup: B | (() => B)) =>
    updateModifier(TodoTestModifier.value, describe(what, setup))

  export const skip = <A extends string, B extends Tests>(what: A, setup: B | (() => B)) =>
    updateModifier(SkipTestModifier.value, describe(what, setup))
}
