import { CodeNode, SourceListMap } from 'source-list-map'
import { MemoryResult, SourceAndSourceMap } from '../types'
import { wrapModuleInFactory } from '../wrapModuleInFactory/wrapModuleInFactory'

export type CreateDynamicBundleOptions = {
  directory: string
  fileName: string
  results: MemoryResult[]
}

const JSONP_SETUP_OPEN = new CodeNode(`(window.typedJsonp = window.typedJsonp || []).push(`)
const JSONP_SETUP_CLOSE = new CodeNode(`);`)
const COMMA = new CodeNode(`,`)
const ARRAY_OPEN = new CodeNode(`[`)
const ARRAY_CLOSE = new CodeNode(`]`)

export function createDynamicBundle({
  directory,
  fileName,
  results,
}: CreateDynamicBundleOptions): SourceAndSourceMap {
  const lastIndex = results.length - 1
  const sourceList = new SourceListMap([JSONP_SETUP_OPEN])

  results.forEach((result, index) => {
    sourceList.add(createDyanmicResult(directory, result))

    if (index !== lastIndex) {
      sourceList.add(COMMA)
    }
  })

  sourceList.add(JSONP_SETUP_CLOSE)

  return sourceList.toStringWithSourceMap({ file: fileName })
}

function createDyanmicResult(directory: string, result: MemoryResult) {
  const { moduleId } = result
  const factory = wrapModuleInFactory(directory, result)
  const sourceList = new SourceListMap([ARRAY_OPEN])

  sourceList.add(factory)
  sourceList.add(COMMA)
  sourceList.add(String(moduleId))
  sourceList.add(ARRAY_CLOSE)

  return sourceList
}
