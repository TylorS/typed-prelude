import { basename, dirname, extname, join } from 'path'
import { pathJoin } from '../../common/pathJoin'
import { DependencyMap, DependencyType } from '../types'
import { findDependenciesOfType } from './findDependenciesOfType'
import { getHash } from './getHash'

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

function insertHash(hash: string, filePath: string) {
  const dir = dirname(filePath)
  const ext = extname(filePath)
  const base = basename(filePath).replace(ext, '')

  return join(dir, base + `.${hash}` + ext)
}
