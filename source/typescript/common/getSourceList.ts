import { relative } from 'path'
import { CodeNode, fromStringWithSourceMap, SourceListMap } from 'source-list-map'
import { fromJust, isJust } from '../../maybe'
import { MemoryResult, SourceMap } from '../types'

export function getSourceList(
  directory: string,
  { fileName, js, map }: MemoryResult,
): SourceListMap {
  if (isJust(map)) {
    const path = relative(directory, fileName)

    const sourceMap = fromJust(map)

    return fromStringWithSourceMap(js, replacePath(path, sourceMap))
  }

  return new SourceListMap([new CodeNode(js)])
}

function replacePath(path: string, sourceMap: SourceMap): SourceMap {
  return {
    ...sourceMap,
    sources: [path],
  }
}
