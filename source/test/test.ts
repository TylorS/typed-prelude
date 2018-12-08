// tslint:disable-next-line:no-var-requires
require('creed').shim()

import { LogLevel, nodeLogger } from '@typed/typescript'
import { join } from 'path'
import { watchTestMetadata } from './parse'
import { resultsToString } from './results/resultsToString'
import { zipMetadataWithResults } from './results/zipMetadataWithResults'
import { collectNodeTests } from './runTests/collectNodeTests'
import { runTests } from './runTests/runTests'
import { TestMetadata } from './types'

async function main() {
  const logger = nodeLogger(LogLevel.INFO)

  const { start } = await watchTestMetadata({
    directory: join(__dirname, '../../'),
    fileGlobs: ['source/**/*.test.ts'],
    onTestMetadata: async (testMetadata: TestMetadata[]) => {
      const tests = collectNodeTests(testMetadata)
      const results = await runTests(200, tests)
      const resultsWithMetadata = zipMetadataWithResults(testMetadata, results)

      await logger.info(resultsToString(resultsWithMetadata, LogLevel.DEBUG))
    },
    logger,
  })

  start()
}

main()
