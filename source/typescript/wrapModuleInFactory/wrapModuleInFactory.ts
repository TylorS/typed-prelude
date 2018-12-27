import { CodeNode, fromStringWithSourceMap, SourceListMap } from 'source-list-map'
import { fromJust, isJust, Maybe } from '../../maybe'
import { MemoryResult } from '../emitToMemory'

const FACTORY_OPEN = new CodeNode(`function (require, module, exports, __typedRequire) {\n`)
const FACTORY_CLOSE = new CodeNode(`\n}`)

export function wrapModuleInFactory(result: MemoryResult): MemoryResult {
  const sourceList = getSourceList(result)

  sourceList.preprend(FACTORY_OPEN)
  sourceList.add(FACTORY_CLOSE)

  const { source, map: sourceMap } = sourceList.toStringWithSourceMap({ file: result.fileName })

  return {
    ...result,
    js: source,
    map: Maybe.of(JSON.stringify(sourceMap)),
  }
}

function getSourceList({ js, map }: MemoryResult): SourceListMap {
  if (isJust(map)) {
    const mapContents = JSON.parse(fromJust(map))

    return fromStringWithSourceMap(js, mapContents)
  }

  return new SourceListMap([new CodeNode(js)])
}
