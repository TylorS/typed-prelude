import { Assertions, describe, given, it } from '@typed/test'
import { join, relative } from 'path'
import Project from 'ts-simple-ast'
import { isNothing, map, withDefault } from '../../maybe'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { emitResults } from '../emitResults'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { BundleGraph } from '../types'
import { createBundleGraph } from './createBundleGraph'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`createBundleGraphs`, [
  given(`a simple SourceFile`, [
    it(`returns expected BundleGraph`, assertions => {
      const { assertGraph, ...env } = setupTestEnvinronment('simple.ts', assertions)
      const graph = createBundleGraph(env)

      assertGraph(['simple.ts'], [], [], graph)
    }),
  ]),

  given(`a SourceFile with dynamic import`, [
    it(`returns expected BundleGraph`, assertions => {
      const { assertGraph, ...env } = setupTestEnvinronment('dynamic-import.ts', assertions)
      const graph = createBundleGraph(env)

      assertGraph(['dynamic-import.ts'], [], [['math.ts']], graph)
    }),
  ]),

  given(`a SourceFile with dynamic import and common dependencies`, [
    it(`returns expected BundleGraph`, assertions => {
      const { assertGraph, ...env } = setupTestEnvinronment('common-bundle.ts', assertions)
      const graph = createBundleGraph(env)

      assertGraph(['dynamic-import.ts', 'commonjs.ts', 'common-bundle.ts'], ['math.ts'], [], graph)
    }),
  ]),
])

function setupTestEnvinronment(fileName: string, { equal, ok }: Assertions) {
  const filePath = join(testFixtures, fileName)
  const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
  const project = new Project({ compilerOptions: tsConfig.compilerOptions })
  const sourceFile = project.addExistingSourceFile(filePath)
  const { dependencyMap, moduleIdToFilePaths, moduleIds } = findSourceFileDependencies({
    sourceFile,
    project,
  })
  const results = emitResults({
    sourceFiles: Array.from(dependencyMap.values()).map(x => x.sourceFile),
    project,
    directory: testFixtures,
    moduleIds,
  })

  const getPath = (x: string) => join(testFixtures, x)

  function assertGraph(
    fileNames: string[],
    commonNames: string[],
    dynamicNames: string[][],
    { main, common, dynamicBundles }: BundleGraph,
  ) {
    equal(fileNames.map(getPath), main.map(x => x.fileName))

    if (commonNames.length === 0) {
      ok(isNothing(common))
    } else {
      equal(
        commonNames,
        withDefault([], map(x => x.map(y => relative(testFixtures, y.fileName)), common)),
      )
    }

    equal(
      dynamicNames,
      dynamicBundles.map(x => x.results.map(y => relative(testFixtures, y.fileName))),
    )
  }

  return {
    results,
    publicPath: '/',
    dependencyMap,
    moduleIds,
    moduleIdToFilePaths,
    assertGraph,
  }
}
