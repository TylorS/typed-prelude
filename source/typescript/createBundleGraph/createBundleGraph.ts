import { mapObj } from '../../common/mapObj'
import { unnest } from '../../list'
import { Maybe, Nothing } from '../../maybe'
import { generateDynamicImportPaths } from '../common/generateDynamicImportPaths'
import { getHash } from '../common/getHash'
import {
  BundleGraph,
  DependencyMap,
  DynamicBundleResults,
  EmitResults,
  MemoryResult,
} from '../types'
import { dependenciesOfFile } from './dependenciesOfFile'
import { findDuplicatesByPath } from './findDuplicatesByPath'

export type CreateBundleGraphOptions = {
  results: EmitResults
  dependencyMap: DependencyMap
  moduleIds: Map<string, number>
  moduleIdToFilePaths: Map<number, string>
  publicPath: string
}

export function createBundleGraph({
  dependencyMap,
  results,
  moduleIdToFilePaths,
  publicPath,
}: CreateBundleGraphOptions): BundleGraph {
  const hash = getHash()
  const mainResults = dependenciesOfFile(moduleIdToFilePaths.get(0)!, dependencyMap, results)
  const dynamicImportPaths = generateDynamicImportPaths({
    dependencyMap,
    publicPath,
    bundleHash: hash,
  })
  const dynamicImportResults = mapObj(
    filePath => dependenciesOfFile(filePath, dependencyMap, results),
    dynamicImportPaths,
  )
  const dynamicResults = unnest(
    Object.keys(dynamicImportResults).map(key => dynamicImportResults[key]),
  )
  const commonResults = findDuplicatesByPath([...dynamicResults, ...mainResults])
  const commonFileNames = commonResults.map(x => x.fileName)
  const common = commonResults.length > 0 ? Maybe.of(commonResults) : Nothing
  const main = removeCommon(commonFileNames, mainResults)
  const dynamicBundles = createDynamicBundles(
    dynamicImportPaths,
    dynamicImportResults,
    commonFileNames,
  )

  return { hash, main, common, dynamicBundles }
}

function createDynamicBundles(
  dynamicImportPaths: Record<string, string>,
  dynamicImportResults: Record<string, MemoryResult[]>,
  common: string[],
): DynamicBundleResults[] {
  const removeCommonResults = (filePath: string, generatedPath: string): DynamicBundleResults => ({
    fileName: generatedPath,
    results: removeCommon(common, dynamicImportResults[filePath]),
  })

  return Object.keys(dynamicImportPaths)
    .map(filePath => removeCommonResults(filePath, dynamicImportPaths[filePath]))
    .filter(x => x.results.length > 0)
}

function removeCommon(commonFileNames: string[], results: MemoryResult[]): MemoryResult[] {
  return results.filter(x => !commonFileNames.includes(x.fileName))
}
