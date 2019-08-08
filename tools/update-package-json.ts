import * as fs from 'fs'
import { EOL } from 'os'
import * as path from 'path'
import { PACKAGES, sourceDirectory } from './common'

for (const pkg of PACKAGES) {
  const pkgDirectory = path.join(sourceDirectory, pkg)
  const packageJSONPath = path.join(pkgDirectory, 'package.json')

  if (!fs.existsSync(packageJSONPath)) {
    throw new Error(`Run 'npm init' in ${pkgDirectory} before running this script.`)
  }

  console.log(`Updating ${packageJSONPath}...`)

  const packageJSONData = JSON.parse(fs.readFileSync(packageJSONPath).toString())
  delete packageJSONData.scripts
  packageJSONData.main = './cjs/index.js'
  packageJSONData.unpkg = './umd/index.js'
  packageJSONData.module = './esm/index.js'
  packageJSONData.license =
    'Parity Public Licence 3.0 <https://licensezero.com/ids/52afd698-c5c7-4034-b229-ef1243d4caeb/>'
  delete packageJSONData.type
  packageJSONData.types = './esm/index.d.ts'
  packageJSONData['main:ts'] = './source/index.ts'
  packageJSONData.publishConfig = {
    access: 'public',
  }
  packageJSONData.peerDependencies = {
    ...(packageJSONData.peerDependencies || {}),
    tslib: '^1.10.0',
  }
  packageJSONData.sideEffects = false
  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSONData, null, '  ') + EOL)
}
