import { existsSync, readFileSync, watchFile, writeFileSync } from 'fs'
import { Bundle, EnvPlugin, FuseBox, Plugin, WebIndexPlugin } from 'fuse-box'
import { TypeChecker } from 'fuse-box-typechecker'
import { ITypeCheckerOptions } from 'fuse-box-typechecker/dist/commonjs/interfaces'
import { basename, extname, join, relative } from 'path'
import { gzip } from 'zlib'

const NODE_ENV = process.env.NODE_ENV || 'development'

export type MakeBundleOptions = {
  readonly cwd: string
  readonly entry: string
  readonly dist?: string
  readonly filesToWatch?: Array<[string, string]>
  readonly port?: number
  readonly mode?: 'development' | 'production'
  readonly skipTypeCheck?: boolean
  readonly noHash?: boolean
  readonly additionalArithmetic?: string
}

export async function makeBundle(options: MakeBundleOptions) {
  const {
    cwd = process.cwd(),
    entry,
    filesToWatch = [],
    port = 1234,
    mode = NODE_ENV,
    skipTypeCheck = false,
    noHash = false,
    additionalArithmetic = '',
  } = options
  const TSCONFIG = join(cwd, 'tsconfig.json')
  const TSLINT = join(cwd, 'tslint.json')
  const SOURCE = join(cwd, 'source')
  const DIST = join(cwd, options.dist || 'dist')
  const MAIN_BUNDLE = join(cwd, entry)
  const MAIN_BUNDLE_NAME = basename(MAIN_BUNDLE, extname(MAIN_BUNDLE))
  const MAIN_INSTRUCTIONS = relative(cwd, MAIN_BUNDLE)

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

  if (!skipTypeCheck && mode === 'development') {
    typechecker.startTreadAndWait()
  }

  async function makeBundle(name: string, instructions: string) {
    const plugins: Array<Plugin | Plugin[]> = [
      EnvPlugin({
        NODE_ENV: mode,
      }),
    ]

    if (name === MAIN_BUNDLE_NAME) {
      const template = join(SOURCE, 'index.html')

      if (existsSync(template)) {
        plugins.push(
          WebIndexPlugin({
            template,
            appendBundles: true,
            async: true,
            path: '/',
          }),
        )
      }

      // if (mode === 'production') {
      //   plugins.push(
      //     QuantumPlugin({
      //       uglify: true,
      //       replaceProcessEnv: true,
      //       treeshake: true,
      //       bakeApiIntoBundle: name,
      //     }),
      //   )
      // }
    }

    const useHash = !noHash && mode === 'production'
    const fuse = FuseBox.init({
      homeDir: cwd,
      tsConfig: TSCONFIG,
      target: 'browser@es6',
      output: join(DIST, useHash ? '$name.$hash.js' : '$name.js'),
      plugins,
      useTypescriptCompiler: true,
      useJsNext: true,
      sourceMaps: true,
      hash: useHash,
      log: {
        showBundledFiles: false,
      },
    })

    if (mode === 'development' && name === MAIN_BUNDLE_NAME) {
      fuse.dev({ port, fallback: 'index.html', root: DIST })
    }

    watchBundle(fuse.bundle(name).instructions(instructions + ' ' + additionalArithmetic))

    const producer = await fuse.run()

    if (mode === 'production') {
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
    return mode === 'development'
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

      if (mode === 'development') {
        watchFile(fromPath, () => writeFileSync(toPath, readFileSync(fromPath)))
      }
    }
  }

  let id: any = void 0
  function scheduleNextRun() {
    if (!skipTypeCheck) {
      clearTimeout(id)
      id = setTimeout(() => typechecker.useThreadAndTypecheck(), 1000)
    }
  }

  if (!skipTypeCheck && mode === 'production') {
    typechecker.runSync()
  }

  try {
    await makeBundle(MAIN_BUNDLE_NAME, `> ${MAIN_INSTRUCTIONS}`)
  } catch (error) {
    console.error(error)

    process.exit(1)
  }

  watchAndCopy(...filesToWatch)
}
