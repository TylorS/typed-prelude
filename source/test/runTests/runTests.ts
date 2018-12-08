import { withDefault } from '../../maybe'
import { dissoc } from '../../objects'
import { getModifier } from '../test-api/getModifier'
import { isTestRunner } from '../test-api/isTestRunner'
import {
  FailedTestResult,
  TestCollectionWithMetadataId,
  TestResultWithMetadataId,
  TestRunnerWithMetadataId,
  TestWithMetadataId,
  TYPED_COLLECTION,
  TYPED_TEST,
} from '../types'

export function runTests(
  defaultTimeout: number,
  tests: TestWithMetadataId[],
): Promise<TestResultWithMetadataId[]> {
  return Promise.all(tests.map(test => runTest(defaultTimeout, test)))
}

function runTest(
  defaultTimeout: number,
  test: TestWithMetadataId,
): Promise<TestResultWithMetadataId> {
  return isTestRunner(test)
    ? runTestRunner(defaultTimeout, test)
    : runTestCollection(defaultTimeout, test)
}

function runTestCollection(
  defaultTimeout: number,
  test: TestCollectionWithMetadataId,
): Promise<TestResultWithMetadataId> {
  const { tests, ...config } = test[TYPED_COLLECTION]
  const modifier = getModifier(test)

  if (modifier === 'skip') {
    return Promise.resolve<TestResultWithMetadataId>({
      ...config,
      type: 'skip',
    })
  }

  return runTests(defaultTimeout, tests)
    .then(
      (results): TestResultWithMetadataId => ({
        ...config,
        type: 'collection',
        results,
      }),
    )
    .catch(
      (error): TestResultWithMetadataId => ({
        error,
        type: 'fail',
        ...config,
      }),
    )
}

function runTestRunner(
  defaultTimeout: number,
  test: TestRunnerWithMetadataId,
): Promise<TestResultWithMetadataId> {
  const config = test[TYPED_TEST]
  const { modifier, timeout, metadataId } = config

  return test
    .runTest({
      timeout: withDefault(defaultTimeout, timeout),
      skip: modifier === 'skip',
    })
    .catch(
      (error: Error): FailedTestResult => ({
        ...dissoc('metadataId', config),
        error,
        type: 'fail',
      }),
    )
    .then(
      (testResult): TestResultWithMetadataId => ({
        ...testResult,
        metadataId,
      }),
    )
}
