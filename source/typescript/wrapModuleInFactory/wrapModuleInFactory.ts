import { CodeNode, SourceListMap } from 'source-list-map'
import { getSourceList } from '../common/getSourceList'
import { MemoryResult } from '../types'

const FACTORY_OPEN = new CodeNode(`function (require, module, exports, __typedRequire) {\n`)
const FACTORY_CLOSE = new CodeNode(`\n}`)

export function wrapModuleInFactory(result: MemoryResult): SourceListMap {
  const sourceList = getSourceList(result)

  sourceList.preprend(FACTORY_OPEN)
  sourceList.add(FACTORY_CLOSE)

  return sourceList
}
