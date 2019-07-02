import * as fs from 'fs'
import { cpus } from 'os'
import { join } from 'path'
import { promisify } from 'util'
import { PACKAGES, sourceDirectory } from './common'
import { MakeUmdBundleOptions } from './makeUmdBundle'
import { runInAnotherProcess } from './runInAnotherProcess'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const removeFile = promisify(fs.unlink)
const readDirectory = promisify(fs.readdir)

const MAKE_BUNDLE_CLI = join(__dirname, 'makeUmdBundleCli.ts')

if (process.mainModule === module) {
  bundlePackages(sourceDirectory, PACKAGES, 'source/index.ts')
}

export async function bundlePackages(
  sourceDirectory: string,
  PACKAGES: readonly string[],
  entry: string,
) {
  const numOfCpus = cpus().length
  const packages = PACKAGES.slice()
  let bundling = 0

  async function runNextPackage() {
    if (bundling >= numOfCpus) {
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

  await Promise.all([runNextPackage(), runNextPackage(), runNextPackage()])
}

async function bundlePackage(sourceDirectory: string, pkg: string, entry: string) {
  const directory = join(sourceDirectory, pkg)

  console.log(`Bundling @typed/${pkg}...`)

  if (pkg === 'dom' || pkg === 'react') {
    // Fix rollup resolving to file without exports
    // Rollup resolves to index.js instead of path defined by package.json main or module :/
    const conflictingPackages = await findConflictingNodeModules(directory)
    const filesToRemove = conflictingPackages.map(dir => join(dir, 'index.js'))

    await temporarilyRemoveFiles(filesToRemove, () =>
      makeBundleInAnotherProcess({
        directory,
        entry,
        external: [`basichtml`, `react`], // peer dependencies
      }),
    )
  } else {
    await makeBundleInAnotherProcess({ directory, entry })
  }

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

async function findConflictingNodeModules(directory: string): Promise<string[]> {
  const nodeModulesDir = join(directory, 'node_modules')

  if (!fs.existsSync(nodeModulesDir)) {
    return []
  }

  const nodeModules = await readDirectory(nodeModulesDir)
  const packageFolders = await Promise.all(
    nodeModules.map(pkg => {
      const dir = join(nodeModulesDir, pkg)

      return pkg.startsWith('@')
        ? readDirectory(dir).then(dirs => dirs.map(x => join(dir, x)))
        : [dir]
    }),
  ).then(pkgs => pkgs.reduce((acc, x) => acc.concat(x), []))
  const nestedFolders = await Promise.all(
    packageFolders.map(dir => findConflictingNodeModules(dir)),
  ).then(pkgs => pkgs.reduce((acc, x) => acc.concat(x), []))
  const allFolders = [...packageFolders, ...nestedFolders]

  return allFolders.filter(isConflictingPackage)
}

function isConflictingPackage(directory: string): boolean {
  try {
    const pkgJson = require(join(directory, 'package.json'))
    const index = join(directory, 'index.js')

    return fs.existsSync(index) && pkgJson.main !== 'index.js'
  } catch {
    return false
  }
}

async function temporarilyRemoveFiles<A>(paths: string[], fn: () => Promise<A>): Promise<A> {
  const contents = await Promise.all(paths.map(x => readFile(x))).then(x => x.toString())

  await Promise.all(paths.map(x => removeFile(x)))

  const x = await fn()

  await Promise.all(paths.map((path, i) => writeFile(path, contents[i])))

  return x
}
