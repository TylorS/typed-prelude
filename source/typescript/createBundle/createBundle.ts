import { createNodeEnvTransformer, deadIfsTransformer } from '@ts-tools/robotrix'
import { Project } from 'ts-simple-ast'
import { map } from '../../maybe'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { COMMON_JS, MAIN_JS } from '../common/constants'
import { findDependenciesOfType } from '../common/findDependenciesOfType'
import { generateDynamicImportPaths } from '../common/generateDynamicImportPaths'
import { getHash } from '../common/getHash'
import { insertHash } from '../common/insertHash'
import { createBundleGraph } from '../createBundleGraph/createBundleGraph'
import { createDynamicBundle } from '../createDynamicBundle/createDynamicBundle'
import { createDynamicImportTransformer } from '../createDynamicImportTransformer'
import { createEntryBundle } from '../createEntryBundle/createEntryBundle'
import { createImportRemapTransformer } from '../createImportRemapTransformer'
import { createLinkReplacementTransformer } from '../createLinkReplacementTransformer/createLinkReplacementTransformer'
import { createUnusedExportTransformer } from '../createUnusedExportTransformer'
import { emitResults } from '../emitResults'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { Bundle, DependencyType, TsConfig } from '../types'

export type CreateBundleOptions = {
  tsConfig: TsConfig
  directory: string
  filePath: string
  publicPath?: string
  linkExtensions?: string[]
  mainFileName?: string
  commonFileName?: string
}

export function createBundle({
  tsConfig,
  directory,
  filePath,
  linkExtensions,
  publicPath = '/',
  mainFileName = MAIN_JS,
  commonFileName = COMMON_JS,
}: CreateBundleOptions): Bundle {
  const bundleHash = getHash()
  const { compilerOptions } = adjustTsConfig(tsConfig)
  const project = new Project({ compilerOptions })
  const sourceFile = project.addExistingSourceFile(filePath)
  const { dependencyMap, moduleIds, moduleIdToFilePaths } = findSourceFileDependencies({
    sourceFile,
    project,
    linkExtensions,
  })
  const linkDependencies = findDependenciesOfType(dependencyMap, DependencyType.Link)
  const dynamicImportPaths = generateDynamicImportPaths({ dependencyMap, bundleHash })
  const sourceFiles = Array.from(dependencyMap.values()).map(x => x.sourceFile)
  const results = emitResults({
    sourceFiles,
    project,
    directory,
    moduleIds,
    transformers: {
      before: [
        createLinkReplacementTransformer({ publicPath, linkDependencies }),
        createImportRemapTransformer({ tsConfig, moduleIds }),
        createDynamicImportTransformer({ dynamicImportPaths, moduleIdToFilePaths, publicPath }),
        createUnusedExportTransformer({ dependencyMap }),
        createNodeEnvTransformer(process.env),
      ],
      after: [deadIfsTransformer],
    },
  })
  const { main, common, dynamicBundles } = createBundleGraph({
    bundleHash,
    dependencyMap,
    publicPath,
    moduleIds,
    moduleIdToFilePaths,
    results,
    dynamicImportPaths,
  })

  return {
    hash: bundleHash,
    main: createEntryBundle({
      directory,
      fileName: insertHash(bundleHash, mainFileName),
      publicPath,
      results: main,
      dynamicImportPaths,
      moduleIds,
    }),
    common: map(
      results =>
        createDynamicBundle({
          directory,
          fileName: insertHash(bundleHash, commonFileName),
          results,
        }),
      common,
    ),
    dynamicBundles: dynamicBundles.map(x => ({
      fileName: x.fileName,
      ...createDynamicBundle({ ...x, directory }),
    })),
  }
}
