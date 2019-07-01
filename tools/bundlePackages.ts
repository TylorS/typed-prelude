import { join } from 'path'
import { capitalize } from '../packages/strings/source'
import { PACKAGES, sourceDirectory } from './common'
import { makeBundle } from './makeBundle'

async function bundlePackages() {
  for (const pkg of PACKAGES) {
    const cwd = join(sourceDirectory, pkg)
    const additionalArithmetic = pkg === 'dom' ? `-basichtml` : void 0

    await makeBundle({
      cwd,
      entry: 'source/index.ts',
      mode: 'production',
      dist: 'umd',
      skipTypeCheck: true,
      noHash: true,
      additionalArithmetic,
      globals: {
        default: `typed${capitalize(pkg.replace('-', ' ')).replace(' ', '')}`,
      },
    })
  }
}

bundlePackages()
