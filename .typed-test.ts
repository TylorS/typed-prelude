import { Options } from '@typed/test'

const nodeOptions: Options = {
  typeCheck: false,
  files: ['source/typescript/**/*.test.ts'],
}

const browserOptions: Options = {
  ...nodeOptions,
  mode: 'browser',
  files: ['source/typescript/**/*.browser-test.ts'],
}

export default [nodeOptions, browserOptions]
