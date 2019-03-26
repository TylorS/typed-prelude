import { RunOptions } from '../cli'
import { TestMetadata } from '../types'
import {
  LOGGING_DIRECTORY,
  RESULTS_DIRECTORY,
  RUN_TESTS_DIRECTORY,
  TEST_ID_TO_METADATA_MAP,
  TESTS_DIRECTORY,
} from './constants'
import { createBrowserImports } from './createBrowserImports'
import { createTestsArray } from './createTestsArray'

export type CreateBrowserTestFileOptions = {
  testMetadata: TestMetadata[]
  runOptions: RunOptions
  namespace: string
}

export function createBrowserTestFile({
  namespace,
  runOptions,
  testMetadata,
}: CreateBrowserTestFileOptions): string {
  const { logLevel, testRunId, timeout } = runOptions
  const { imports, metadataPush, numberOfTests } = createBrowserImports(testMetadata)
  const testMetadataById = testMetadata.map(testMetadata => [testMetadata.id, testMetadata])

  const testFile = [
    `import { newDefaultScheduler } from '@most/scheduler'`,
    `import { getTestId, getTestConfigs, createTestConfigPublisher, createTestIdToMetadataIdPublisher } from '${TESTS_DIRECTORY}'`,
    `import { createServerLogger, createConsoleLogger, combineLogger } from '${LOGGING_DIRECTORY}'`,
    `import { runTests } from '${RUN_TESTS_DIRECTORY}'`,
    `import { createResultsPublisher, testInformationToMetadataWithResults, resultsToString } from '${RESULTS_DIRECTORY}'`,
    imports,
    ``,
    `const ${TEST_ID_TO_METADATA_MAP} = []`,
    `const scheduler = newDefaultScheduler()`,
    `const testIdToMetadataIdPublisher = createTestIdToMetadataIdPublisher({ namespace: '${namespace}', logLevel: ${logLevel} })`,
    `const testConfigPublisher = createTestConfigPublisher({ namespace: '${namespace}', logLevel: ${logLevel} })`,
    `const resultsPublisher = createResultsPublisher({ namespace: '${namespace}' })`,
    `const logger = combineLoggers(`,
    `  createConsoleLogger({ scheduler, logLevel: ${logLevel} }),`,
    `  createServerLogger({ namespace: '${namespace}', scheduler }),`,
    `)`,
    `const tests = ${createTestsArray(numberOfTests)}`,
    `const testConfigs = getTestConfigs(tests)`,
    `const testIdToTestConfig = testConfigs.map(testConfig => [testConfig.id, testConfig])`,
    ``,
    metadataPush,
    `testIdToMetadataIdPublisher.publish('${testRunId}', ${TEST_ID_TO_METADATA_MAP})`,
    `testConfigPublisher.publish('${testRunId}', testConfigs)`,
    ``,
    `runTests({ tests, logger, timeout: ${timeout} }).then(testResults => {`,
    `  const results = testInformationToMetadataWithResults({`,
    `    testMetadataById = new Map(${JSON.stringify(testMetadataById)}),`,
    `    testIdToMetadataId: new Map(${TEST_ID_TO_METADATA_MAP}),`,
    `    testIdToTestConfig: new Map(testIdToTestConfig),`,
    `    testResults`,
    `  })`,
    ``,
    `  logger.log(resultsToString(results))`,
    ``,
    `})`,
    ``,
  ]

  return testFile.join(`\n`)
}
