import { descend } from '../../list'
import { DependencyMap, DependencyType, EmitResults, MemoryResult } from '../types'

// TODO: warn of circular dependencies?
// Finds all results of depedencies that are not dynamic or links
export function dependenciesOfFile(
  filePath: string,
  dependencyMap: DependencyMap,
  results: EmitResults,
) {
  const memoryResults: MemoryResult[] = []
  const pathsThatNeedProcessing: string[] = [filePath]
  const processedPaths: string[] = []

  while (pathsThatNeedProcessing.length > 0) {
    const path = pathsThatNeedProcessing.shift() as string

    if (processedPaths.includes(path)) {
      continue
    }

    processedPaths.push(path)

    const { dependencies: deps } = dependencyMap.get(path)!

    memoryResults.push(results.get(path)!)
    deps.forEach(({ type, resolvedFilePath }) => {
      if (type === DependencyType.DynamicImport || type === DependencyType.Link) {
        return
      }

      pathsThatNeedProcessing.push(resolvedFilePath)
    })
  }

  return memoryResults.sort(descend(x => x.moduleId))
}
