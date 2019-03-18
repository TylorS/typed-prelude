import { disposeAll } from '@most/disposable'
import { newDefaultScheduler } from '@most/scheduler'
import { findRunOptions, RunOptions } from './cli'
import { findNodeTests } from './findNodeTests'
import { createConsoleLogger } from './logging'
import { resultsToString, testInformationToMetadataWithResults } from './results'
import { runTests } from './runTests'
import { TestMetadataCache } from './tests/TestMetadataCache'
import { watchTestMetadata } from './tests/watchTestMetadata'
import { LogLevel } from './types'

const args = process.argv.slice(2)

async function main() {
  const directory = process.cwd()
  const scheduler = newDefaultScheduler()
  const logLevel = LogLevel.INFO
  const logger = createConsoleLogger({ logLevel, scheduler })
  const runOptionsList = findRunOptions(directory, args)

  const handleTestMetadata = async (runOptions: RunOptions, cache: TestMetadataCache) => {
    const { testMetadata, testMetadataById } = cache.getChangedMetadata()

    await logger.info(`Finding Node Tests...`)
    const { tests, testIdToMetadataId, testIdToTestConfig } = await findNodeTests({
      metadata: testMetadata,
      logger,
    })
    await logger.log('Running Tests...')
    const results = testInformationToMetadataWithResults({
      testMetadataById,
      testIdToMetadataId,
      testIdToTestConfig,
      testResults: await runTests({
        tests,
        logger,
        timeout: runOptions.timeout,
      }),
    })

    await logger.log(resultsToString(results))
  }

  const disposables = await Promise.all(
    runOptionsList.map(runOptions =>
      watchTestMetadata({
        directory,
        runOptions,
        logger,
        onTestMetadata: (cache: TestMetadataCache) => handleTestMetadata(runOptions, cache),
      }),
    ),
  )

  return disposeAll(disposables)
}

main()
