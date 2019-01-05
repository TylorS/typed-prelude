import { mkdirSync, writeFileSync } from 'fs'
import { basename, join, relative } from 'path'
import rimraf = require('rimraf')
import { map } from '../maybe'
import { COMMON_JS, MAIN_JS } from './common/constants'
import { insertHash } from './common/insertHash'
import { createBundle } from './createBundle'
import { findTsConfig } from './findTsConfig'
import { SourceAndSourceMap, SourceMap } from './types'

type MainOptions = {
  directory: string
  filePath: string
  outputDirectory: string
  publicPath: string
  useHash: boolean
  mainFileName?: string
  commonFileName?: string
}

async function main({
  directory,
  useHash,
  filePath,
  outputDirectory,
  publicPath,
  mainFileName = MAIN_JS,
  commonFileName = COMMON_JS,
}: MainOptions) {
  const tsConfig = findTsConfig({ directory })
  const { hash, main, common, dynamicBundles } = createBundle({
    tsConfig,
    directory,
    filePath,
    publicPath,
  })

  rimraf.sync(outputDirectory)
  mkdirSync(outputDirectory)
  writeBundle(
    directory,
    outputDirectory,
    useHash ? insertHash(hash, mainFileName) : mainFileName,
    useHash ? main : removeHash(hash, main),
  )
  map(
    x =>
      writeBundle(
        directory,
        outputDirectory,
        useHash ? insertHash(hash, commonFileName) : commonFileName,
        useHash ? x : removeHash(hash, x),
      ),
    common,
  )
  dynamicBundles.forEach(x => writeBundle(directory, outputDirectory, x.fileName, x))
}

function removeHash(hash: string, sourceAndSourceMap: SourceAndSourceMap): SourceAndSourceMap {
  const updatedFile = sourceAndSourceMap.map.file
    ? sourceAndSourceMap.map.file.replace(`.${hash}`, '')
    : sourceAndSourceMap.map.file

  return {
    source: sourceAndSourceMap.source,
    map: {
      ...sourceAndSourceMap.map,
      file: updatedFile,
    },
  }
}

function writeBundle(
  directory: string,
  outputDirectory: string,
  fileName: string,
  { source, map }: SourceAndSourceMap,
) {
  const relativePath = relative(join(outputDirectory, `/just-needs-a-filename`), directory)
  const filePath = join(outputDirectory, fileName)
  const sourceMap = adjustSourceMap(relativePath, map)

  writeFileSync(filePath, source + `\n` + sourceMapUrl(fileName))
  writeFileSync(filePath + '.map', JSON.stringify(sourceMap))
}

function adjustSourceMap(relativePath: string, map: SourceMap): SourceMap {
  return {
    ...map,
    sources: map.sources.map(x => join(relativePath, x)),
  }
}

function sourceMapUrl(fileName: string) {
  const base = basename(fileName)

  return `//# sourceMappingURL=${base}.map`
}

const directory = process.cwd()
const outputDirectory = join(directory, 'dist')
const filePath = join(__dirname, 'bundle-test.ts')

const options: MainOptions = {
  directory,
  outputDirectory,
  filePath,
  publicPath: 'dist',
  useHash: false,
}

main(options)
