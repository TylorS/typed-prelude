import { findTsConfig, Logger, SourceFileWatcher, watchSourceFiles } from '@typed/typescript'
import { TestMetadata } from '../types'
import { findTestMetadata } from './findTestMetadata'

export async function watchTestMetadata({
  directory,
  configFileName,
  fileGlobs,
  debounce,
  onTestMetadata,
  logger,
}: WatchTestMetadataOptions): Promise<SourceFileWatcher> {
  await logger.timeStart('Finding TSConfig...')
  const tsConfig = findTsConfig({ directory, configFileName })
  await logger.timeEnd('Finding TSConfig...')

  return watchSourceFiles({
    tsConfig,
    fileGlobs,
    debounce,
    logger,
    onSourceFiles: async ({ sourceFiles, program }) => {
      await logger.debug('Finding Test Metadata...')
      await logger.timeStart('Found Test Metadata')
      const testMetadata = findTestMetadata({ sourceFiles, program })
      await logger.timeEnd('Found Test Metadata')

      if (testMetadata.length > 0) {
        onTestMetadata(testMetadata)
      }
    },
  })
}

export type WatchTestMetadataOptions = {
  directory: string
  onTestMetadata: (testMetadata: TestMetadata[]) => void
  logger: Logger
  configFileName?: string
  fileGlobs?: string[]
  debounce?: number
}
