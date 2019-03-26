import { red, underline } from '@typed/common/colors'
import { cross } from '@typed/common/figures'
import { AssertionError } from 'power-assert'
import { FailedTestResult, NodeMetadataWithResult } from '../types'
import { addIndentation } from './addIndentation'
import { formatConfigName } from './formatConfigName'

export function logFailingNodeMetadataResult(
  { config, startLine, result }: NodeMetadataWithResult,
  filePath: string,
): string {
  const error = (result as FailedTestResult).error
  const message = `${red(cross)} ${formatConfigName(config.name)} ${underline(
    `${filePath}:${startLine}`,
  )}`

  if (error instanceof AssertionError && error.generatedMessage) {
    return `${message}${addIndentation(`\n${error.message}`, 4)}`
  } else if (error instanceof Error && error.stack) {
    const stackMessage = error.stack.includes(error.message)
      ? error.stack
      : `${error.message}\n${addIndentation(error.stack, 2)}`

    return `${message}${addIndentation(`\n${stackMessage}`, 4)}`
  }

  return message
}
