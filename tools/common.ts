import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

export const rootDirectory = join(__dirname, '..')
export const sourceDirectory = join(rootDirectory, 'packages')
export const PACKAGES = readdirSync(sourceDirectory).filter(x => {
  const pkg = join(sourceDirectory, x)

  return statSync(pkg).isDirectory() && existsSync(join(pkg, 'package.json'))
})
