import { Project, ts } from 'ts-simple-ast'
import { mapObj } from '../../common/mapObj'
import { unnest } from '../../list'
import { Maybe, Nothing } from '../../maybe'
import { generateDynamicImportPaths } from '../common/generateDynamicImportPaths'
import { getHash } from '../common/getHash'
import { emitResults } from '../emitResults'
import { BundleGraph, DependencyMap, DynamicBundleResults, MemoryResult } from '../types'
import { dependenciesOfFile } from './dependenciesOfFile'
import { findDuplicatesByPath } from './findDuplicatesByPath'

export type CreateBundleGraphOptions = {
  directory: string
  project: Project
  dependencyMap: DependencyMap
  moduleIds: Map<string, number>
  moduleIdToFilePaths: Map<number, string>
  publicPath: string
  transformers?: {
    before?: Array<ts.TransformerFactory<ts.SourceFile>>
    after?: Array<ts.TransformerFactory<ts.SourceFile>>
    afterDeclarations?: Array<ts.TransformerFactory<ts.SourceFile | ts.Bundle>>
  }
}

export function createBundleGraph({
  directory,
  project,
  dependencyMap,
  moduleIds,
  moduleIdToFilePaths,
  publicPath,
  transformers,
}: CreateBundleGraphOptions): BundleGraph {
  const hash = getHash()
  const sourceFiles = Array.from(dependencyMap.values()).map(x => x.sourceFile)
  const results = emitResults({ sourceFiles, directory, project, moduleIds, transformers })
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
  const dynamicResults = Object.keys(dynamicImportResults).map(key => dynamicImportResults[key])
  const commonResults = findDuplicatesByPath(unnest(dynamicResults).concat(mainResults))
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
