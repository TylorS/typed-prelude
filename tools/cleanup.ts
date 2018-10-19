import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from 'fs'
import { join } from 'path'

const rootPath = join(__dirname, '..')
const sourcePath = join(rootPath, 'source')
const libs = readdirSync(sourcePath)

for (const lib of libs) {
  rimraf(join(rootPath, lib))
}

const indexPaths = ['index.js', 'index.js.map', 'index.d.ts']

for (const path of indexPaths) {
  unlinkSync(join(rootPath, path))
}

function rimraf(directory: string) {
  if (existsSync(directory)) {
    readdirSync(directory).forEach(entry => {
      const entryPath = join(directory, entry)
      if (lstatSync(entryPath).isDirectory()) {
        rimraf(entryPath)
      } else {
        unlinkSync(entryPath)
      }
    })
    rmdirSync(directory)
  }
}
