import { Options } from '@typed/test'

const nodeOptions: Options = {
  typeCheck: true,
  files: ['packages/**/*.test.ts'],
}

const browserOptions: Options = {
  ...nodeOptions,
  mode: 'browser',
  keepAlive: true,
  files: ['packages/**/*.browser-test.ts'],
}

const configs = [nodeOptions]

if (process.env.BROWSER) {
  configs.push(browserOptions)
}

export default configs
