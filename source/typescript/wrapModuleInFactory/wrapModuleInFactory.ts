import { CodeNode, fromStringWithSourceMap, SourceListMap } from 'source-list-map'
import { fromJust, isJust } from '../../maybe'
import { MemoryResult } from '../types'

const FACTORY_OPEN = new CodeNode(`function (require, module, exports, __typedRequire) {\n`)
const FACTORY_CLOSE = new CodeNode(`\n}`)

export function wrapModuleInFactory(result: MemoryResult): SourceListMap {
  const sourceList = getSourceList(result)

  sourceList.preprend(FACTORY_OPEN)
  sourceList.add(FACTORY_CLOSE)

  return sourceList
}

function getSourceList({ js, map }: MemoryResult): SourceListMap {
  if (isJust(map)) {
    const mapContents = JSON.parse(fromJust(map))

    return fromStringWithSourceMap(js, mapContents)
  }

  return new SourceListMap([new CodeNode(js)])
}
