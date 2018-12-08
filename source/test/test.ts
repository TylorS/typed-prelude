import { LogLevel, nodeLogger } from '@typed/typescript'
import { join } from 'path'
import { watchTestMetadata } from './parse'
import { resultsToString } from './results/resultsToString'
import { resultsToTestStats } from './results/resultsToTestStats'
import { zipMetadataWithResults } from './results/zipMetadataWithResults'
import { collectNodeTests } from './runTests/collectNodeTests'
import { runTests } from './runTests/runTests'
import { TestMetadata } from './types'

async function main(watch: boolean) {
  const logger = nodeLogger(LogLevel.INFO)
  console.time('First Run')
  const { start, dispose } = await watchTestMetadata({
    directory: join(__dirname, '../../'),
    fileGlobs: ['source/**/*.test.ts'],
    onTestMetadata: async (testMetadata: TestMetadata[]) => {
      const tests = collectNodeTests(testMetadata)
      const results = await runTests(200, tests)
      const stats = resultsToTestStats(results)
      const resultsWithMetadata = zipMetadataWithResults(testMetadata, results)

      await logger.info(resultsToString(resultsWithMetadata, LogLevel.INFO))
      await logger.info(`\n` + stats.toString())
      console.timeEnd('First Run')

      if (!watch) {
        dispose()
      }
    },
    logger,
  })

  start()
}

main(false)
