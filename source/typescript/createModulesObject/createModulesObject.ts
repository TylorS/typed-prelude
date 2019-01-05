import { CodeNode, SourceListMap } from 'source-list-map'
import { MemoryResult } from '../types'
import { wrapModuleInFactory } from '../wrapModuleInFactory'

const OPEN = new CodeNode(`var modules = {\n`)
const CLOSE = new CodeNode(`\n}`)
const COMMA = new CodeNode(`,`)

export type CreateModulesObjectOptions = {
  directory: string
  results: MemoryResult[]
}

export function createModulesObject({
  directory,
  results,
}: CreateModulesObjectOptions): SourceListMap {
  const sourceList = new SourceListMap([OPEN])
  const entries = Array.from(results.entries())
  const last = entries.length - 1

  for (let i = 0; i < results.length; ++i) {
    const result = results[i]

    sourceList.add(new CodeNode(`${result.moduleId}: `))
    sourceList.add(wrapModuleInFactory(directory, result))

    if (i !== last) {
      sourceList.add(COMMA)
    }
  }

  sourceList.add(CLOSE)

  return sourceList
}
