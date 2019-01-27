import { Bundle } from 'fuse-box'
import { join, relative } from 'path'
import { reduce } from '../../list'
import { isUndefined } from '../../logic'
import { MergeObjects } from '../../objects'
import { TsConfig } from '../types'
import { createFuseBox, CreateFuseBoxOptions } from './fuse-box'

export type CreateBundleOptions = MergeObjects<
  CreateFuseBoxOptions,
  { fileName: string; bundleName?: string; watch?: boolean }
>

export async function createBundle(options: CreateBundleOptions) {
  const {
    directory,
    fileName,
    bundleName = 'app',
    watch = defaultWatchValue(options),
    tsConfig,
  } = options
  const entryPath = relative(directory, fileName)
  const fuseBox = await createFuseBox(options)
  const bundleActions = watch
    ? [withEntry(entryPath), watchMode(directory, tsConfig)]
    : [withEntry(entryPath)]
  const bundle = reduce((bundle, fn) => fn(bundle), fuseBox.bundle(bundleName), bundleActions)

  return { bundle, fuseBox }
}

export function defaultWatchValue({ devServer, ssl }: CreateBundleOptions) {
  return !isUndefined(devServer) || !isUndefined(ssl)
}

function withEntry(relativePath: string) {
  return (bundle: Bundle) => bundle.instructions(`> ${relativePath}`)
}

function watchMode(directory: string, tsConfig: TsConfig) {
  return (bundle: Bundle) => {
    const outDir = tsConfig.compilerOptions.outDir || join(directory, './dist')
    const fuseBoxDir = join(directory, '.fusebox')

    return bundle
      .hmr()
      .watch(undefined, path => !path.startsWith(outDir) && !path.startsWith(fuseBoxDir))
  }
}
