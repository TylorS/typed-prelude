import { NodeMetadataWithResult } from '../types'
import { addIndentation } from './addIndentation'
import { findTypeOfResult } from './findTypeOfResult'
import { logFailingNodeMetadataResult } from './logFailingNodeMetadataResult'
import { logPassingNodeMetadataResult } from './logPassingNodeMetadataResult'

export function logNodeMetadataResult(
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
