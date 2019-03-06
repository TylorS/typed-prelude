import { mergeTestSpecAndConfig } from '../mergeTestSpecAndTestConfig'
import { isRunningTest } from '../tests'
import { GroupResult, Logger, Test, TestResult, TYPED_TEST, TYPED_TEST_COLLECTION } from '../types'

export type RunTestOptions = {
  timeout?: number
  skip?: boolean
  test: Test
  logger: Logger
}

export async function runTest({
  timeout = 2000,
  skip = false,
  test,
  logger,
}: RunTestOptions): Promise<TestResult> {
  if (isRunningTest(test)) {
    const { [TYPED_TEST]: config, runTest } = test
    const spec = mergeTestSpecAndConfig({ timeout, skip, testId: config.id }, config)

    await logger.info(`Running Test: ${config.name}...`)

    const result = await runTest(spec)

    await logger.debug(`Test Result ${config.name}: ${JSON.stringify(result, null, 2)}`)

    return result
  }

  const { [TYPED_TEST_COLLECTION]: config, tests } = test

  await logger.info(`Running Test Collection: ${config.name}...`)
  const results = await Promise.all(tests.map(test => runTest({ timeout, skip, test, logger })))
  const result: GroupResult = { testId: config.id, type: 'group', results }
  await logger.debug(`Test Collection Result ${config.name}: ${JSON.stringify(result, null, 2)}`)

  return result
}
