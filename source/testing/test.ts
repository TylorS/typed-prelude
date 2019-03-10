import { newDefaultScheduler } from '@most/scheduler'
import { blue, bold, green, red } from '@typed/common/colors'
import { cross, tick } from '@typed/common/figures'
import { groupBy, unnest } from '@typed/list'
import { withDefault } from '@typed/maybe'
import { createProject, findTsConfig, installNodeSupport } from '@typed/typescript'
import { Uuid } from '@typed/uuid'
import { EOL } from 'os'
import { parseCliArgs } from './cli'
import { findNodeTests } from './findNodeTests'
import { findTestMetadata } from './findTestMetadata'
import { createConsoleLogger } from './logging'
import { runTests } from './runTests'
import {
  LogLevel,
  NodeMetadata,
  NodeMetadataWithResult,
  TestInformation,
  TestMetadata,
  TestMetadataWithResult,
  TestResult,
} from './types'

const args = process.argv.slice(2)

async function main() {
  const logLevel = LogLevel.INFO
  const directory = process.cwd()
  const cliOptions = parseCliArgs({ directory, args })
  const tsConfig = findTsConfig({
    directory,
    configFileName: withDefault(void 0, cliOptions.tsConfig),
  })

  installNodeSupport({ directory, compilerOptions: tsConfig.compilerOptions })

  const scheduler = newDefaultScheduler()
  const logger = createConsoleLogger({ logLevel, scheduler })
  const { getSourceFiles } = createProject({
    directory,
    tsConfig,
    fileGlobs: withDefault(void 0, cliOptions.fileGlobs),
  })
  const { sourceFiles, typeChecker } = getSourceFiles()
  await logger.info('Finding Test Metadata...')
  const testMetadata = unnest(
    await Promise.all(
      sourceFiles.map(sourceFile => findTestMetadata({ sourceFile, typeChecker, logger })),
    ),
  )
  const testMetadataById = new Map<Uuid, TestMetadata>(
    testMetadata.map(m => [m.id, m] as [Uuid, TestMetadata]),
  )
  await logger.info('Finding Node Tests...')
  const { tests, testIdToMetadataId, testIdToTestConfig } = await findNodeTests({
    metadata: testMetadata,
    logger,
  })
  await logger.log('Running Tests...')
  const results = testInfoToMetadataWithResults({
    testMetadataById,
    testIdToMetadataId,
    testIdToTestConfig,
    testResults: await runTests({ tests, logger }),
  })

  console.log(resultsToString(results))
}

function resultsToString(results: TestMetadataWithResult[]): string {
  let str = ''

  const resultsByFilePath = groupBy(r => r.filePath, results)

  for (const filePath of Object.keys(resultsByFilePath).sort()) {
    const results = resultsByFilePath[filePath]

    str += `\n${bold(filePath)}\n`
    str += results.map(r => logNodeMetadataResult(r, filePath)).join('')
  }

  return str
}

function logNodeMetadataResult(
  result: NodeMetadataWithResult,
  filePath: string,
  depth: number = 2,
): string {
  const type = findTypeOfResult(result.result)

  if (type === 'skip') {
    return ''
  }

  let str = `\n`

  str +=
    type === 'pass'
      ? logPassingNodeMetadataResult(result)
      : logFailingNodeMetadataResult(result, filePath)
  str += `\n`

  for (const test of result.additionalTests) {
    str += `${logNodeMetadataResult(test, filePath, depth)}`
  }

  return addIndentation(str, depth)
}

function addIndentation(str: string, depth: number): string {
  return str.replace(/(\r\n|\r|\n)/g, EOL.padEnd(depth, ' '))
}

function findTypeOfResult(result: TestResult): 'pass' | 'fail' | 'skip' {
  if ('skip' === result.type || 'fail' === result.type || 'pass' === result.type) {
    return result.type
  }

  const skip = result.results.every(x => findTypeOfResult(x) === 'skip')

  if (skip) {
    return 'skip'
  }

  const pass = result.results.every(x => findTypeOfResult(x) === 'pass')

  if (pass) {
    return 'pass'
  }

  return 'fail'
}

function logPassingNodeMetadataResult({ config }: NodeMetadataWithResult): string {
  return `${green(tick)} ${formatConfigName(config.name)} `
}

function logFailingNodeMetadataResult(
  { config, startLine }: NodeMetadataWithResult,
  filePath: string,
): string {
  return `${red(cross)} ${formatConfigName(config.name)} ${filePath}:${startLine}`
}

function formatConfigName(name: string): string {
  return bold(
    name
      .replace(/^describe/i, `${blue('describe')}`)
      .replace(/^given/i, `${blue('given')}`)
      .replace(/^it/i, `${blue('it')}`),
  )
}

function testInfoToMetadataWithResults(info: TestInformation): TestMetadataWithResult[] {
  const { testIdToMetadataId, testIdToTestConfig, testMetadataById, testResults } = info

  return testResults.map(
    (result: TestResult): TestMetadataWithResult => {
      const { testId } = result
      const metadataId = testIdToMetadataId.get(testId)!
      const metadata = testMetadataById.get(metadataId)!
      const config = testIdToTestConfig.get(testId)!
      const additionalTests: NodeMetadataWithResult[] = []
      const additionalResults = result.type === 'group' ? result.results : []
      const additionalToProccess = additionalResults.map((result, i) => ({
        nodeMetadata: metadata.additionalTests[i],
        result,
        additional: additionalTests,
      }))

      while (additionalToProccess.length > 0) {
        const { nodeMetadata, result, additional } = additionalToProccess.shift() as {
          nodeMetadata: NodeMetadata
          result: TestResult
          additional: NodeMetadataWithResult[]
        }
        const additionalTests: NodeMetadataWithResult[] = []
        const nodeMetadataWithResult: NodeMetadataWithResult = {
          ...nodeMetadata,
          result,
          config: testIdToTestConfig.get(result.testId)!,
          additionalTests,
        }

        additional.push(nodeMetadataWithResult)

        if (result.type === 'group') {
          result.results.forEach((result, i) =>
            additionalToProccess.push({
              nodeMetadata: nodeMetadata.additionalTests[i],
              result,
              additional: additionalTests,
            }),
          )
        }
      }

      return {
        ...metadata,
        config,
        result,
        additionalTests,
      }
    },
  )
}

main()
