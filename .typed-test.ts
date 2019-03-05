import { Options } from '@typed/test'

const nodeOptions: Options = {
  typeCheck: false,
  files: ['source/**/*.test.ts'],
}

const browserOptions: Options = {
  ...nodeOptions,
  mode: 'browser',
  files: ['source/**/*.browser-test.ts'],
}

export default [nodeOptions, browserOptions]
