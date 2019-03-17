import { bold } from '@typed/common/colors'
import { groupBy } from '@typed/list'
import { TestMetadataWithResult } from '../types'
import { logNodeMetadataResult } from './logNodeMetadataResult'

export function resultsToString(results: TestMetadataWithResult[]): string {
  let str = ''

  const resultsByFilePath = groupBy(r => r.filePath, results)

  for (const filePath of Object.keys(resultsByFilePath).sort()) {
    const results = resultsByFilePath[filePath]

    str += `\n${bold(filePath)}\n`
    str += results.map(r => logNodeMetadataResult(r, filePath)).join('')
  }

  return str
}
