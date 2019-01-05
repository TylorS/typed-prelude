import { CodeNode, SourceListMap } from 'source-list-map'
import { getSourceList } from '../common/getSourceList'
import { MemoryResult } from '../types'

const FACTORY_OPEN = new CodeNode(`function (require, module, exports, __typedRequire) {\n`)
const FACTORY_CLOSE = new CodeNode(`\n}`)

const USE_STRICT = /"use strict";/
const SOURCE_MAPPING_URL = /\/\/# sourceMappingURL=.+.map/

export function wrapModuleInFactory(directory: string, result: MemoryResult): SourceListMap {
  const sourceList = getSourceList(directory, result)

  sourceList.preprend(FACTORY_OPEN)
  sourceList.add(FACTORY_CLOSE)
  sourceList.mapGeneratedCode(removeGeneratedJunk)

  return sourceList
}

function removeGeneratedJunk(code: string): string {
  return code.replace(USE_STRICT, '').replace(SOURCE_MAPPING_URL, '')
}
