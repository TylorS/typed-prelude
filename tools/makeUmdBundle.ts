// tslint:disable:no-var-requires

import { join } from 'path'
import { OutputOptions, rollup } from 'rollup'
import { makeAbsolute, makePackageName } from './helpers'

import commonjs, { RollupCommonJSOptions } from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const ts = require('rollup-plugin-typescript2')
const json = require('rollup-plugin-json')
const sourceMaps = require('rollup-plugin-sourcemaps')

export type MakeUmdBundleOptions = {
  readonly directory: string
  readonly entry: string
  readonly external?: string[]
  readonly commonJs?: RollupCommonJSOptions
}

export async function makeUmdBundle({
  directory,
  entry,
  external,
  commonJs,
}: MakeUmdBundleOptions) {
  const PKG_JSON = require(join(directory, 'package.json'))
  const { compilerOptions } = require(join(directory, 'tsconfig.json'))
  const UMD_NAME = makePackageName(PKG_JSON.name.replace('@typed/', ''))
  const output: OutputOptions = {
    file: makeAbsolute(directory, PKG_JSON.unpkg),
    name: UMD_NAME,
    format: 'umd',
    sourcemap: true,
  }
  const build = await rollup({
    input: makeAbsolute(directory, entry),
    external,
    output,
    plugins: [
      json(),
      commonjs(commonJs),
      resolve({ mainFields: ['module', 'main'] }),
      ts({
        ...compilerOptions,
        declaration: false,
        composite: false,
        incremental: false,
        rootDir: join(__dirname, '..'),
        check: false,
      }),
      sourceMaps(),
    ],
  })

  await build.write(output)
}
