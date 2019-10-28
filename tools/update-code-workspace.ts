import { writeFileSync } from 'fs'
import { EOL } from 'os'
import { join } from 'path'
import { capitalize } from '../packages/strings/source'
import { PACKAGES, rootDirectory } from './common'

const workspaceFile = join(rootDirectory, 'typed.code-workspace')
const folders: Array<{ name: string; path: string }> = [
  { name: 'Typed Prelude', path: './' },
  ...PACKAGES.map(pkg => {
    return {
      name: getPkgName(pkg),
      path: `./packages/${pkg}`,
    }
  }),
]

writeFileSync(workspaceFile, JSON.stringify({ folders }, null, 2) + EOL)

function getPkgName(pkg: string) {
  return capitalize(pkg.split('-').join(' '))
}
