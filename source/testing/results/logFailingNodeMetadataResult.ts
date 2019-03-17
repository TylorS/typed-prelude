import { red } from '@typed/common/colors'
import { cross } from '@typed/common/figures'
import { NodeMetadataWithResult } from '../types'
import { formatConfigName } from './formatConfigName'

export function logFailingNodeMetadataResult(
  { config, startLine }: NodeMetadataWithResult,
  filePath: string,
): string {
  return `${red(cross)} ${formatConfigName(config.name)} ${filePath}:${startLine}`
}
