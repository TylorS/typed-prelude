import { disposeAll } from '@most/disposable'
import { newDefaultScheduler } from '@most/scheduler'
import { createRemapImportsTransformer, resolvedModulesTransformer } from '@ts-tools/robotrix'
import { LogLevel } from '@typed/common/logger'
import { Subscriptions } from '@typed/common/Subscriptions'
import { createBundle, createResolveFilePath } from '@typed/typescript'
import { getFileExtensions } from '@typed/typescript/common/getFileExtensions'
import { Uuid } from '@typed/uuid'
import { all as clearNodeCache } from 'clear-require'
import express from 'express'
import { mkdirSync, writeFileSync } from 'fs'
import { Disposable } from 'fuse-box/EventEmitter'
import { dirname, join } from 'path'
import { directory as createTemporaryDirectory } from 'tempy'
import { createBrowserTestFile } from './browser/createBrowserTestFile'
import { BrowserStart, getLauncher, openBrowser } from './browser/openBrowser'
import { findRunOptions, RunOptions, TestEvironment } from './cli'
import { findNodeTests } from './findNodeTests'
import { getMachineId } from './getMachineId'
import { createConsoleLogger, createLoggingServer } from './logging'
import {
  createResultsServer,
  ResultsServer,
  resultsToString,
  testInformationToMetadataWithResults,
} from './results'
import { runTests } from './runTests'
import { createTestConfigServer, TestConfigServer } from './tests'
import {
  createTestIdToMetadataIdServer,
  TestIdToMetadataIdServer,
} from './tests/createTestIdToMetadataIdServer'
import { TestMetadataCache } from './tests/TestMetadataCache'
import { watchTestMetadata } from './tests/watchTestMetadata'
import { Logger } from './types'

const args = process.argv.slice(2)

async function main() {
  const directory = process.cwd()
  const scheduler = newDefaultScheduler()
  const runOptionsList = findRunOptions(directory, args)
  const nodeConfigs = runOptionsList.filter(x => x.environment === TestEvironment.Node)
  const browserConfigs = runOptionsList.filter(x => x.environment !== TestEvironment.Node)
  const namespace = getMachineId()
  const outputDirectory = createTemporaryDirectory()
  const bundleDirectory = join(outputDirectory, 'dist')

  mkdirSync(bundleDirectory)

  const handleNodeTestMetadata = async (
    runOptions: RunOptions,
    logger: Logger,
    cache: TestMetadataCache,
  ) => {
    const { testMetadata, testMetadataById } = cache.getChangedMetadata()

    await logger.info(`Finding Node Tests...`)
    clearNodeCache()
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

  const handleBrowserTestMetadata = async (
    runOptions: RunOptions,
    fileName: string,
    onBundle: () => Promise<void>,
    logger: Logger,
    cache: TestMetadataCache,
    testIdToMetadataIdServer: TestIdToMetadataIdServer,
    testConfigServer: TestConfigServer,
    resultsServer: ResultsServer,
    port: number,
    launcher: BrowserStart,
  ) => {
    console.log('Test Metadata')
    const { testRunId, environment, keepAlive } = runOptions
    const { testMetadata, testMetadataById } = cache.getChangedMetadata()
    const testFile = createBrowserTestFile({ namespace, runOptions, testMetadata })

    await logger.info(`Writing Test File (${testRunId})`)

    writeFileSync(fileName, testFile)

    await onBundle()

    const browserInstance = await openBrowser(
      environment,
      `http://localhost:${port}/${testRunId}/`,
      keepAlive,
      launcher,
    )
    const [testIdToMetadataId, testIdToTestConfig, { results: testResults }] = await Promise.all([
      testIdToMetadataIdServer.once(testRunId),
      testConfigServer.once(testRunId),
      resultsServer.once(testRunId),
    ])

    if (!keepAlive) {
      browserInstance.stop()
    }

    const results = testInformationToMetadataWithResults({
      testIdToMetadataId,
      testIdToTestConfig,
      testMetadataById,
      testResults,
    })

    await logger.log(resultsToString(results))
  }

  const promises: Array<Promise<Disposable>> = []

  if (nodeConfigs.length > 0) {
    promises.push(
      ...nodeConfigs.map(async runOptions => {
        const logger = createConsoleLogger({ logLevel: runOptions.logLevel, scheduler })

        return watchTestMetadata({
          directory,
          runOptions,
          logger,
          onTestMetadata: (cache: TestMetadataCache) =>
            handleNodeTestMetadata(runOptions, logger, cache),
        })
      }),
    )
  }

  if (browserConfigs.length > 0) {
    const bundleSubcriptions = new Subscriptions<Uuid, void>()
    const logLevel = LogLevel.OFF
    console.log('Setting up servers')
    const testIdToMetadataIdServer = createTestIdToMetadataIdServer({
      namespace,
      logLevel,
    })
    const testConfigServer = createTestConfigServer({ namespace, logLevel })
    const resultsServer = createResultsServer({ namespace, logLevel })
    const testFileServer = express()

    testFileServer.use(express.static(outputDirectory))

    const bundleNames = new Map<Uuid, string>()
    testFileServer.get('/:testRunId/', (req, res) => {
      const testRunId = req.params.testRunId

      res.send(
        `<html>
          <head>
            <title>@typed/test</title>
          </head>
          <body>
            <main id="root"></main>

            <script src="/dist/${bundleNames.get(testRunId)}"></script>
          </body>
        </html>`,
      )
    })

    const port = process.env.PORT ? parseFloat(process.env.PORT) : 3888

    const launcher = await getLauncher()

    promises.push(
      ...browserConfigs.map(async runOptions => {
        const { testRunId, tsConfig, watch, fuseBoxOptions } = runOptions
        const fileName = join(outputDirectory, `tests${testRunId}.js`)
        const extensions = [
          ...getFileExtensions({ ...tsConfig.compilerOptions, allowJs: true }),
          '.d.ts',
        ]
        const resolvePath = createResolveFilePath({ extensions, browser: true, tsConfig })
        const remapImportsTransformer = createRemapImportsTransformer({
          remapTarget: (target: string, containingFile: string) =>
            resolvePath(dirname(containingFile), target) || target,
        })
        const customTransformers = fuseBoxOptions.customTransformers || {}

        tsConfig.compilerOptions.outDir = bundleDirectory

        const { bundle, fuseBox } = await createBundle({
          ...fuseBoxOptions,
          customTransformers: {
            ...customTransformers,
            before: customTransformers.before
              ? [remapImportsTransformer, resolvedModulesTransformer, ...customTransformers.before]
              : [],
          },
          tsConfig,
          directory: outputDirectory,
          fileName,
          watch,
          writeBundles: false,
        })

        const onBundle = async () => bundleSubcriptions.once(testRunId)

        let hasReceivedMetadata = false

        bundle.completed(() => {
          if (hasReceivedMetadata) {
            const { filename, content } = bundle.context.output.lastPrimaryOutput

            writeFileSync(join(bundleDirectory, filename), content)

            console.log('Bundle Completed')
            bundleNames.set(testRunId, filename)
            bundleSubcriptions.publish(testRunId, void 0)
          }
        })

        const logger = createConsoleLogger({ logLevel: runOptions.logLevel, scheduler })
        const loggingServer = createLoggingServer({ namespace, logger })

        await fuseBox.run()

        const disposable = await watchTestMetadata({
          directory,
          runOptions,
          logger,
          onTestMetadata: (cache: TestMetadataCache) => {
            hasReceivedMetadata = true
            return handleBrowserTestMetadata(
              runOptions,
              fileName,
              onBundle,
              logger,
              cache,
              testIdToMetadataIdServer,
              testConfigServer,
              resultsServer,
              port,
              launcher,
            )
          },
        })

        return disposeAll([disposable, loggingServer])
      }),
    )

    testFileServer.listen(port)
  }

  const disposables = await Promise.all(promises)

  return disposeAll(disposables)
}

main()
