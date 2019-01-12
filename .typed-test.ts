import { Options } from '@typed/test'

const nodeOptions: Options = {
  typeCheck: false,
  files: ['source/assertions/**/*.test.ts'],
}

// const browserOptions: Options = {
//   ...nodeOptions,
//   mode: 'browser',
//   files: ['source/typescript/**/*.browser-test.ts'],
// }

export default [nodeOptions]
