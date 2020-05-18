import { isFunction } from '@typed/logic'
import { Nothing } from '@typed/maybe'
import { uuid4 } from '@typed/uuid'
import { TestConfig, TestModifier, TestName, Tests, TestSuite } from '../domain'
import { uuidEnv } from './uuidEnv'

export function describe<A extends string, B extends Tests>(
  what: A,
  setup: B | (() => B),
): TestSuite<TestConfig<A, number, TestModifier.Default>, B> {
  return {
    type: 'suite',
    config: {
      id: uuid4(uuidEnv.randomUuidSeed()),
      name: `describe ${what}` as TestName<A>,
      timeout: Nothing,
      modifier: TestModifier.Default,
    },
    tests: isFunction(setup) ? setup() : setup,
  } as const
}
