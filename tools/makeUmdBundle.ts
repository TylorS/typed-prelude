// tslint:disable:no-var-requires

import { join } from 'path'
import * as rollup from 'rollup'
import commonjs, { RollupCommonJSOptions } from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { makeAbsolute, makePackageName } from './helpers'

const ts = require('rollup-plugin-typescript2')
const json = require('rollup-plugin-json')
const sourceMaps = require('rollup-plugin-sourcemaps')

const NODE_ENV = process.env.NODE_ENV || 'development'

export type MakeUmdBundleOptions = {
  readonly directory: string
  readonly entry: string
  readonly distName?: string
  readonly external?: string[]
  readonly commonJs?: RollupCommonJSOptions
  readonly watch?: boolean
}

export async function makeUmdBundle({
  directory,
  entry,
  external,
  commonJs,
  watch,
  distName,
}: MakeUmdBundleOptions) {
  const PKG_JSON = require(join(directory, 'package.json'))
  const { compilerOptions } = require(join(directory, 'tsconfig.json'))
  const UMD_NAME = makePackageName(PKG_JSON.name.replace('@typed/', ''))
  const output: rollup.OutputOptions = {
    file: makeAbsolute(directory, distName || PKG_JSON.unpkg || 'dist/index.js'),
    name: `Typed.${UMD_NAME}`,
    format: 'umd',
    sourcemap: true,
  }
  const plugins = [
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
  ]

  if (NODE_ENV === 'production') {
    plugins.unshift(
      replace({
        values: {
          [`typeof window !== 'undefined' && typeof document !== 'undefined'`]: `true`,
        },
        delimiters: ['', ''],
      }),
    )
    plugins.push(terser())
  }

  const rollupOptions: rollup.RollupOptions = {
    input: makeAbsolute(directory, entry),
    external,
    output,
    plugins,
    treeshake: {
      propertyReadSideEffects: false,
    },
  }

  if (watch) {
    await rollup.watch([rollupOptions])
  } else {
    const build = await rollup.rollup(rollupOptions)

    await build.write(output)
  }
}
