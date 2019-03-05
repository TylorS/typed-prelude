import { mergeTestSpecAndConfig } from '../mergeTestSpecAndTestConfig'
import { isRunningTest } from '../tests'
import { GroupResult, Test, TestResult, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'

export type RunTestOptions = {
  timeout?: number
  skip?: boolean
  test: Test
}

export async function runTest({
  timeout = 2000,
  skip = false,
  test,
}: RunTestOptions): Promise<TestResult> {
  if (isRunningTest(test)) {
    const { [TYPED_TEST]: config, runTest } = test
    const spec = mergeTestSpecAndConfig({ timeout, skip, testId: config.id }, config)

    return runTest(spec)
  }

  const { [TYPED_TEST_COLLECTION]: config, tests } = test

  const results = await Promise.all(tests.map(test => runTest({ timeout, skip, test })))
  const result: GroupResult = { testId: config.id, type: 'group', results }

  return result
}
