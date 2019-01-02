import { CodeNode, fromStringWithSourceMap, SourceListMap } from 'source-list-map'
import { fromJust, isJust } from '../../maybe'
import { MemoryResult } from '../types'

export function getSourceList({ js, map }: MemoryResult): SourceListMap {
  if (isJust(map)) {
    const mapContents = JSON.parse(fromJust(map))

    return fromStringWithSourceMap(js, mapContents)
  }

  return new SourceListMap([new CodeNode(js)])
}
