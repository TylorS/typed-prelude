import { certificateFor } from 'devcert'
import { FuseBox, FuseBoxOptions, QuantumPlugin, WebIndexPlugin } from 'fuse-box'
import { ServerOptions } from 'fuse-box/devServer/Server'
import { IndexPluginOptions } from 'fuse-box/plugins/WebIndexPlugin'
import { join, relative } from 'path'
import { CustomTransformers, ScriptTarget } from 'typescript'
import { CompilationTarget, TsConfig } from '../types'

export type CreateFuseBoxOptions = {
  directory: string
  tsConfig: TsConfig
  compilationTarget?: CompilationTarget
  customTransformers?: CustomTransformers
  devServer?: ServerOptions
  ssl?: boolean
  hash?: boolean
  indexHtmlPath?: string
  log?: boolean
}

export async function createFuseBox({
  directory,
  tsConfig,
  compilationTarget = CompilationTarget.UNIVERSAL,
  customTransformers,
  devServer,
  ssl = false,
  hash = true,
  indexHtmlPath,
  log = false,
}: CreateFuseBoxOptions): Promise<FuseBox> {
  const useDevServer = !!devServer || !!ssl
  const { compilerOptions, configPath } = tsConfig
  const target = `${compilationTarget}${scriptTargetToTarget(compilerOptions.target)}`
  const outDir = compilerOptions.outDir || join(directory, './dist')
  const output = join(
    compilerOptions.outDir ? relative(directory, outDir) : outDir,
    hash ? '$name.$hash.js' : '$name.js',
  )
  const options: FuseBoxOptions = {
    homeDir: directory,
    tsConfig: configPath,
    target,
    useTypescriptCompiler: true,
    useJsNext: true,
    transformers: customTransformers,
    hash,
    output,
    plugins: [],
    log,
    sourceMaps: useDevServer
      ? {
          inline: true,
        }
      : true,
  }

  if (useDevServer || indexHtmlPath) {
    const indexOptions: IndexPluginOptions = {
      appendBundles: true,
    }

    if (indexHtmlPath) {
      indexOptions.template = indexHtmlPath
    }

    options.plugins!.push(WebIndexPlugin(indexOptions))
  }

  if (process.env.NODE_ENV === 'production') {
    options.plugins!.push(
      QuantumPlugin({
        bakeApiIntoBundle: true,
        containedAPI: true,
        manifest: true,
        treeshake: true,
        uglify: true,
      }),
    )
  }

  const fuse = FuseBox.init(options)

  if (useDevServer) {
    fuse.dev(ssl ? await sslOptions(devServer) : devServer)
  }

  return fuse
}

async function sslOptions(
  options: ServerOptions = { fallback: 'index.html' },
): Promise<ServerOptions> {
  const { key, cert } = await certificateFor('localhost')

  return {
    ...options,
    https: {
      key,
      cert,
    },
  }
}

function scriptTargetToTarget(scriptKind?: ScriptTarget): string {
  if (scriptKind === ScriptTarget.ES5) {
    return '@es5'
  }

  if (scriptKind === ScriptTarget.ES2015) {
    return '@es2015'
  }

  if (scriptKind === ScriptTarget.ES2016) {
    return '@es2016'
  }

  if (scriptKind === ScriptTarget.ES2017) {
    return '@es2017'
  }

  if (scriptKind === ScriptTarget.ES2018 || scriptKind === ScriptTarget.ESNext) {
    return '@esnext'
  }

  return '@es5'
}
