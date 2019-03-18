import { Disposable } from '@most/types'
import { unnest } from '@typed/list'
import { createProject } from '@typed/typescript'
import { RunOptions, TestEvironment } from '../cli'
import { findTestMetadata } from '../findTestMetadata'
import { Logger } from '../types'
import { TestMetadataCache } from './TestMetadataCache'

export type WatchTestMetadataOptions = {
  directory: string
  runOptions: RunOptions
  logger: Logger
  onTestMetadata: (testMetadata: TestMetadataCache) => Promise<void>
}

export async function watchTestMetadata(options: WatchTestMetadataOptions): Promise<Disposable> {
  const cache = new TestMetadataCache()
  const { directory, runOptions, logger } = options
  const { testRunId, tsConfig, environment, fileGlobs, watch } = runOptions
  const browser = environment !== TestEvironment.Node
  const { watchSourceFiles } = createProject({ directory, tsConfig, browser, fileGlobs })
  const disposable = await watchSourceFiles(
    async ({ sourceFiles, typeChecker }) => {
      await logger.info(`Finding Test Metadata (${testRunId})`)

      const testMetadata = unnest(
        await Promise.all(
          sourceFiles.map(sourceFile => findTestMetadata({ sourceFile, typeChecker, logger })),
        ),
      )

      await logger.debug(`Test Metadata (${testRunId})\n${JSON.stringify(testMetadata, null, 2)}`)

      cache.addTestMetadata(testMetadata)

      await options.onTestMetadata(cache)

      if (!watch) {
        disposable.dispose()
      }
    },
    { logger, onFileRemoved: cache.removeFilePath },
  )

  return disposable
}
