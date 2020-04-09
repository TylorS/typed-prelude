import { writeFileSync } from 'fs'
import { EOL } from 'os'
import { join } from 'path'
import { capitalize } from '../packages/strings/source'
import { PACKAGES, rootDirectory } from './common'

const workspaceFile = join(rootDirectory, 'typed.code-workspace')
const folders: { name: string; path: string }[] = [
  ...PACKAGES.map((pkg) => {
    return {
      name: getPkgName(pkg),
      path: `./packages/${pkg}`,
    }
  }),
  { name: 'Typed Prelude', path: './' },
]

writeFileSync(workspaceFile, JSON.stringify({ folders }, null, 2) + EOL)

function getPkgName(pkg: string) {
  return capitalize(pkg.split('-').join(' '))
}
