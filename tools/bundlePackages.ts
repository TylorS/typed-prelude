import { join } from 'path'
import { PACKAGES, sourceDirectory } from './common'
import { makePackageName } from './helpers'
import { makeBundle } from './makeBundle'

export async function bundlePackages() {
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
        default: `typed${makePackageName(pkg)}`,
      },
    })
  }
}

if (process.mainModule === module) {
  bundlePackages()
}
