import { green } from '@typed/common/colors'
import { tick } from '@typed/common/figures'
import { NodeMetadataWithResult } from '../types'
import { formatConfigName } from './formatConfigName'

export function logPassingNodeMetadataResult({ config }: NodeMetadataWithResult): string {
  return `${green(tick)} ${formatConfigName(config.name)} `
}
