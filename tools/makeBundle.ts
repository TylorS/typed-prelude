import { existsSync, readFileSync, watchFile, writeFileSync } from 'fs'
import { Bundle, EnvPlugin, FuseBox, Plugin, QuantumPlugin, WebIndexPlugin } from 'fuse-box'
import { TypeChecker } from 'fuse-box-typechecker'
import { ITypeCheckerOptions } from 'fuse-box-typechecker/dist/commonjs/interfaces'
import { basename, extname, join, relative } from 'path'
import { gzip } from 'zlib'

const NODE_ENV = process.env.NODE_ENV || 'development'

export type MakeBundleOptions = {
  readonly entry: string

  readonly cwd?: string
  readonly filesToWatch?: Array<[string, string]>

  readonly port?: number
}

export function makeBundle(options: MakeBundleOptions) {
  const HOME_DIR = join(__dirname, '..')
  const { cwd = process.cwd(), entry, filesToWatch = [], port = 1234 } = options
  const TSCONFIG = join(cwd, 'tsconfig.json')
  const TSLINT = join(cwd, 'tslint.json')
  const SOURCE = join(cwd, 'source')
  const DIST = join(cwd, 'dist')
  const MAIN_BUNDLE = join(cwd, entry)
  const MAIN_BUNDLE_NAME = basename(MAIN_BUNDLE, extname(MAIN_BUNDLE))
  const MAIN_INSTRUCTIONS = relative(HOME_DIR, MAIN_BUNDLE)

  if (!existsSync(MAIN_BUNDLE)) {
    console.error('Unable to find entry file:', MAIN_BUNDLE)
    process.exit(1)
  }

  const typeCheckerOptions: ITypeCheckerOptions = {
    tsConfig: TSCONFIG,
    name: 'source',
    basePath: cwd,
    yellowOnLint: true,
    shortenFilenames: true,
  }

  if (existsSync(TSLINT)) {
    typeCheckerOptions.tsLint = TSLINT
  }

  // get typechecker
  const typechecker = TypeChecker(typeCheckerOptions)

  if (NODE_ENV === 'development') {
    typechecker.startTreadAndWait()
  }

  async function makeBundle(name: string, instructions: string) {
    const plugins: Array<Plugin | Plugin[]> = [
      EnvPlugin({
        NODE_ENV,
      }),
    ]

    if (name === MAIN_BUNDLE_NAME) {
      plugins.push(
        WebIndexPlugin({
          template: join(SOURCE, 'index.html'),
          appendBundles: true,
          async: true,
          path: '/',
        }),
      )

      if (NODE_ENV === 'production') {
        plugins.push(
          QuantumPlugin({
            uglify: true,
            replaceProcessEnv: true,
            treeshake: true,
          }),
        )
      }
    }

    const fuse = FuseBox.init({
      homeDir: HOME_DIR,
      tsConfig: TSCONFIG,
      target: 'browser@es6',
      output: join(DIST, NODE_ENV === 'production' ? '$name.$hash.js' : '$name.js'),
      plugins,
      useTypescriptCompiler: true,
      useJsNext: true,
      sourceMaps: true,
      hash: NODE_ENV === 'production',
    })

    if (NODE_ENV === 'development' && name === MAIN_BUNDLE_NAME) {
      fuse.dev({ port, fallback: 'index.html', root: DIST })
    }

    watchBundle(fuse.bundle(name).instructions(instructions))

    const producer = await fuse.run()

    if (NODE_ENV === 'production') {
      producer.bundles.forEach(bundle => {
        const { path } = bundle.context.output.lastPrimaryOutput
        const contents = readFileSync(path)

        gzip(contents, (error, buffer) => {
          if (error) {
            throw error
          }

          writeFileSync(path + '.gz', buffer)
        })
      })
    }
  }

  function watchBundle(bundle: Bundle) {
    return NODE_ENV === 'development'
      ? bundle
          .hmr()
          .watch(
            void 0,
            path =>
              !path.includes('.fusebox') && !path.includes('.history') && !path.includes('.vscode'),
          )
          .completed(scheduleNextRun)
      : bundle
  }

  function watchAndCopy(...files: Array<[string, string]>): void {
    for (const [fromPath, toPath] of files) {
      writeFileSync(toPath, readFileSync(fromPath))

      if (NODE_ENV === 'development') {
        watchFile(fromPath, () => writeFileSync(toPath, readFileSync(fromPath)))
      }
    }
  }

  let id: any = void 0
  function scheduleNextRun() {
    clearTimeout(id)
    id = setTimeout(() => typechecker.useThreadAndTypecheck(), 1000)
  }

  if (NODE_ENV === 'production') {
    typechecker.runSync()
  }

  Promise.all([makeBundle(MAIN_BUNDLE_NAME, `> ${MAIN_INSTRUCTIONS}`)]).catch(error => {
    console.error(error)

    process.exit(1)
  })

  watchAndCopy(...filesToWatch)
}
