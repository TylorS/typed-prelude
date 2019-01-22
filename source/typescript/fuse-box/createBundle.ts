import { join, relative } from 'path'
import { MergeObjects } from '../../objects'
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
    devServer,
    watch = !!devServer,
    tsConfig,
  } = options
  const outDir = tsConfig.compilerOptions.outDir || join(directory, './dist')
  const fuseBoxDir = join(directory, '.fusebox')
  const relativePath = relative(directory, fileName)
  const fuseBox = await createFuseBox(options)
  let bundle = fuseBox.bundle(bundleName).instructions(`> ${relativePath}`)

  if (watch) {
    bundle = bundle.hmr().watch(void 0, x => !x.startsWith(outDir) && !x.startsWith(fuseBoxDir))
  }

  return { bundle, fuseBox }
}
