import { describe, given, it } from '@typed/test'
import { uuid, Uuid } from '@typed/uuid'
import { TestConfig, TestModifier, TestSpec } from '../types'
import { mergeTestSpecAndConfig } from './mergeTestSpecAndConfig'

const createTestConfig = ({
  id = uuid(),
  name = 'Test',
  modifier = TestModifier.DEFAULT,
  timeout,
}: Partial<TestConfig>): TestConfig => ({ id, name, modifier, timeout })

const createTestSpec = ({
  testId = uuid(),
  timeout = 2000,
  skip = false,
}: Partial<TestSpec>): TestSpec => ({ testId, timeout, skip })

const createMerged = (
  id: Uuid,
  { spec, config }: { spec?: Partial<TestSpec>; config?: Partial<TestConfig> } = {},
): TestSpec =>
  mergeTestSpecAndConfig(
    createTestSpec({ ...spec, testId: id }),
    createTestConfig({ ...config, id }),
  )

export const test = describe(`mergeTestSpecAndConfig`, [
  given(`a TestSpec and a Test Config`, [
    it(`returns a TestSpec`, ({ equal }) => {
      const testId = uuid()

      equal({ testId, timeout: 2000, skip: false }, createMerged(testId))
      equal(
        { testId, timeout: 5000, skip: false },
        createMerged(testId, { spec: { timeout: 5000 } }),
      )
      equal(
        { testId, timeout: 2000, skip: false },
        createMerged(testId, { spec: { timeout: 5000 }, config: { timeout: 2000 } }),
      )
      equal(
        {
          testId,
          timeout: 2000,
          skip: true,
        },
        createMerged(testId, { spec: { skip: true } }),
      )
      equal(
        {
          testId,
          timeout: 2000,
          skip: false,
        },
        createMerged(testId, { spec: { skip: true }, config: { modifier: TestModifier.ONLY } }),
      )
    }),
  ]),
])
