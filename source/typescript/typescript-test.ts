import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import rimraf = require('rimraf')
import { map } from '../maybe'
import { withDot } from './common/withDot'
import { createBundle } from './createBundle'
import { findTsConfig } from './findTsConfig'
import { SourceAndSourceMap } from './types'

const OUT = join(__dirname, '../../dist')

async function main() {
  const directory = __dirname
  const filePath = join(directory, 'bundle-test.ts')
  const tsConfig = findTsConfig({ directory })
  const { main, common, dynamicBundles } = createBundle({
    tsConfig,
    directory,
    filePath,
    publicPath: 'dist',
  })

  rimraf.sync(OUT)
  mkdirSync(OUT)
  writeBundle('bundle.js', main)
  map(x => writeBundle('common.js', x), common)
  dynamicBundles.forEach(x => writeBundle(x.fileName, x))
}

function writeBundle(fileName: string, { source, map }: SourceAndSourceMap) {
  const filePath = fileName.includes('/') ? withDot(fileName) : join(OUT, fileName)

  writeFileSync(filePath, source)
  writeFileSync(filePath + '.map', JSON.stringify(map))
}

main()
