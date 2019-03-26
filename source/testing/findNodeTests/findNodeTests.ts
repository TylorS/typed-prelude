import { Uuid } from '@typed/uuid'
import { getTestConfig, isTestCollection } from '../tests'
import {
  Logger,
  Test,
  TestConfig,
  TestIdToMetadataId,
  TestIdToTestConfig,
  TestMetadata,
} from '../types'

export type FindNodeTestsOptions = {
  metadata: TestMetadata[]
  logger: Logger
}

export async function findNodeTests({
  metadata,
  logger,
}: FindNodeTestsOptions): Promise<{
  tests: Test[]
  testIdToMetadataId: TestIdToMetadataId
  testIdToTestConfig: TestIdToTestConfig
}> {
  const tests: Test[] = []
  const testIdToMetadataId = new Map<Uuid, Uuid>()
  const testIdToTestConfig = new Map<Uuid, TestConfig>()

  function addTestWithMetadata(test: Test, meta: TestMetadata) {
    const config = getTestConfig(test)

    tests.push(test)
    testIdToMetadataId.set(config.id, meta.id)
    addConfig(test)
  }

  function addConfig(test: Test) {
    const config = getTestConfig(test)

    testIdToTestConfig.set(config.id, config)

    if (isTestCollection(test)) {
      test.tests.forEach(t => addConfig(t))
    }
  }

  const metadataTests = await Promise.all(
    metadata.map(m => tryRequire(m, logger).then(tests => [m, tests] as [TestMetadata, Test[]])),
  )

  for (const [m, tests] of metadataTests) {
    console.log(m, tests)
    for (const test of tests) {
      addTestWithMetadata(test, m)
    }
  }

  return {
    tests,
    testIdToMetadataId,
    testIdToTestConfig,
  }
}

async function tryRequire(metadata: TestMetadata, logger: Logger): Promise<Test[]> {
  const tests: Test[] = []

  try {
    await logger.debug(`Requiring ${metadata.filePath}`)
    const mod = require(metadata.filePath)

    tests.push(mod[metadata.exportNames[0]])

    return tests
  } catch (error) {
    await logger.error(error.message)

    return tests
  }
}
