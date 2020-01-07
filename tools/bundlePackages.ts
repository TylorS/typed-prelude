import { cpus } from 'os'
import { join } from 'path'
import { PACKAGES, sourceDirectory } from './common'
import { MakeUmdBundleOptions } from './makeUmdBundle'
import { runInAnotherProcess } from './runInAnotherProcess'

const MAKE_BUNDLE_CLI = join(__dirname, 'makeUmdBundleCli.ts')

if (process.mainModule === module) {
  const packages = process.argv.slice(2)

  bundlePackages(sourceDirectory, PACKAGES, packages, 'source/index.ts')
}

export async function bundlePackages(
  sourceDirectory: string,
  PACKAGES: readonly string[],
  packagesToBundle: readonly string[],
  entry: string,
) {
  const numOfCpus = cpus().length
  const maxProcesses = numOfCpus * 2
  const packages =
    packagesToBundle.length > 0
      ? PACKAGES.filter(
          pkg =>
            packagesToBundle.includes(pkg) || packagesToBundle.includes(join(sourceDirectory, pkg)),
        )
      : PACKAGES.slice()
  let bundling = 0

  async function runNextPackage() {
    if (bundling >= maxProcesses) {
      return
    }

    const pkg = packages.shift()

    if (pkg) {
      bundling++
      await bundlePackage(sourceDirectory, pkg, entry)
      bundling--
      await runNextPackage()
    }
  }

  await Promise.all(
    Array(maxProcesses)
      .fill(null)
      .map(() => runNextPackage()),
  )
}

async function bundlePackage(sourceDirectory: string, pkg: string, entry: string) {
  const directory = join(sourceDirectory, pkg)

  console.log(`Bundling @typed/${pkg}...`)

  await makeBundleInAnotherProcess({ directory, entry })

  console.log(`Bundled @typed/${pkg}.`)
}

async function makeBundleInAnotherProcess({
  directory,
  entry,
  external,
  commonJs,
}: MakeUmdBundleOptions) {
  const args = ['-d', directory]

  if (external) {
    args.push('-e', external.join(','))
  }

  if (commonJs) {
    args.push('--commonJs', JSON.stringify(commonJs))
  }

  await runInAnotherProcess(MAKE_BUNDLE_CLI, [...args, entry])
}
