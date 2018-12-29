import { pathJoin } from '../../common/pathJoin'
import { DependencyMap, DependencyType } from '../types'
import { findDependenciesOfType } from './findDependenciesOfType'
import { getHash } from './getHash'
import { insertHash } from './insertHash'

export type GenerateDynamicImportPathsOptions = {
  dependencyMap: DependencyMap
  publicPath: string
  bundleHash?: string
}

export function generateDynamicImportPaths({
  dependencyMap,
  publicPath,
  bundleHash,
}: GenerateDynamicImportPathsOptions) {
  const dynamicImports = findDependenciesOfType(dependencyMap, DependencyType.DynamicImport)

  return Object.keys(dynamicImports).reduce(
    (acc, x) => {
      const deps = dynamicImports[x]

      deps.forEach(dep => {
        const filePath = getHash() + `.js`

        acc[dep.resolvedFilePath] = pathJoin([
          publicPath,
          bundleHash ? insertHash(bundleHash, filePath) : filePath,
        ])
      })

      return acc
    },
    {} as Record<string, string>,
  )
}
