import { LogLevel } from '@typed/typescript'
import { errorToString } from '../../assertions'
import { blue, bold, green, red, underline } from '../../common/colors'
import { cross, tick } from '../../common/figures'
import { groupBy } from '../../list'
import {
  CollectionTestResultWithMetadata,
  FailedTestResult,
  PassedTestResult,
  TestResult,
  TestResultWithMetadata,
  WithMetadata,
} from '../types'

export function resultsToString(results: TestResultWithMetadata[], logLevel: LogLevel): string {
  const resultsByFilePath = groupBy(x => x.metadata.filePath, results)
  const filePaths = Object.keys(resultsByFilePath).sort()
  let str = `\n`

  const lastIndex = filePaths.length - 1
  filePaths.forEach((filePath, index) => {
    const testResultsWithMetadata = resultsByFilePath[filePath]

    if (index !== 0) {
      str += `\n`
    }

    str += underline(filePath)

    for (const result of testResultsWithMetadata) {
      str += `\n` + moveIn(resultToString(result, logLevel, false))
    }

    if (index !== lastIndex) {
      str += `\n`
    }
  })

  return str.replace(/\n(\s)+\n(\s)+\n/g, '\n\n')
}

export function resultToString(
  result: TestResultWithMetadata,
  logLevel: LogLevel,
  nested = false,
): string {
  if (result.type === 'pass') {
    return passingTestResultToString(result, nested)
  }

  if (result.type === 'fail') {
    return failingTestResultToString(result, nested)
  }

  if (result.type === 'skip') {
    return skippedTestResultToString(result, nested, logLevel)
  }

  return collectionTestResultToString(result, logLevel)
}

export function passingTestResultToString(
  { name }: WithMetadata<PassedTestResult>,
  nested: boolean,
) {
  return newLineWhenNotNested(`${green(tick)} ${testName(name)}`, nested)
}

export function failingTestResultToString(
  { name, error, metadata: { filePath, startLine } }: WithMetadata<FailedTestResult>,
  nested: boolean,
): string {
  const resultName = `${red(cross)} ${testName(name)} - ${filePath}:${startLine}`
  const resultError = errorToString(error)

  return newLineWhenNotNested(resultName + moveIn(`\n` + resultError), nested)
}

export function skippedTestResultToString(
  { name }: TestResult,
  nested: boolean,
  logLevel: LogLevel,
): string {
  if (logLevel < LogLevel.DEBUG) {
    return ''
  }

  return newLineWhenNotNested(`${blue('(Skipped)')} ${testName(name)}`, nested)
}

export function collectionTestResultToString(
  { results, name, metadata: { startLine, endLine, filePath } }: CollectionTestResultWithMetadata,
  logLevel: LogLevel,
): string {
  const lineNumbers = `:${startLine}:${endLine}`
  return (
    `\n${underline(bold(testName(name)))}${
      name.includes('given') ? '' : ` - ${filePath}${lineNumbers}`
    }\n  ` +
    moveIn(
      results
        .map((x, i) => {
          const r = resultToString(x, logLevel, true)

          if (i > 0 && x.type !== 'collection' && results[i - 1].type === 'collection') {
            return `\n${r}`
          }

          return x.type === 'fail' ? `${r}\n` : r
        })
        .join(`\n`),
    )
  )
}

function newLineWhenNotNested(s: string, nested: boolean) {
  return nested ? s : `\n${s}`
}

function moveIn(str: string): string {
  return str.replace(/\n/g, `\n  `)
}

function testName(name: string): string {
  const itRegex = /^it\s/
  const givenRegex = /^given\s/

  if (itRegex.test(name)) {
    return name.replace(itRegex, `${blue('it ')}`)
  }

  if (givenRegex.test(name)) {
    return name.replace(givenRegex, `${blue('given ')}`)
  }

  return name
}
