import { existsSync, readdirSync, statSync, unlinkSync } from 'fs'
import { join } from 'path'
import rimraf = require('rimraf')

const rootPath = join(__dirname, '..')
const sourcePath = join(rootPath, 'source')
const libs = readdirSync(sourcePath).filter(x => statSync(x).isDirectory())

for (const lib of libs) {
  rimraf.sync(join(rootPath, lib))
}

const indexPaths = ['index.js', 'index.js.map', 'index.d.ts']

for (const path of indexPaths) {
  const filePath = join(rootPath, path)

  if (existsSync(filePath)) {
    unlinkSync(filePath)
  }
}
