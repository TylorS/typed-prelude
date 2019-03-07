import { isString, isUndefined } from '@typed/logic'
import { Maybe, Nothing } from '@typed/maybe'
import { makeAbsolute } from '@typed/typescript'
import yargs from 'yargs'
import { CliOptions, TestEvironment } from './types'

export type ParseCliArgsOptions = {
  directory: string
  args: string[]
  version?: string
}

export function parseCliArgs({ directory, args, version }: ParseCliArgsOptions): CliOptions {
  let y = yargs
    .option('config', {
      alias: 'c',
      describe: 'Absolute or relative path to @typed/test configuration.',
    })
    .option('environment', {
      alias: 'e',
      describe: 'Environment where you would like to run your tests',
      choices: [
        'node',
        'chrome',
        'chrome-headless',
        'chromium',
        'firefox',
        'opera',
        'safari',
        'ie',
      ],
      default: 'node',
    })
    .option('timeout', {
      alias: 't',
      describe: 'Time in which your tests will be required to complete.',
      number: true,
      default: 2000,
    })
    .option('typeCheck', {
      describe: 'Type Check your test files in another process.',
      boolean: true,
      default: false,
    })
    .option('watch', {
      alias: 'w',
      describe: 'Re-run them as their dependencies changes.',
      boolean: true,
      default: false,
    })
    .option('keepAlive', {
      describe: 'Keep browsers open after running tests.',
      boolean: true,
      default: false,
    })
    .help()

  if (!isUndefined(version)) {
    y = y.version(version)
  }

  const argv = y.parse(args)

  const options: CliOptions = {
    fileGlobs: argv._,
    config: argv.config
      ? Maybe.of(
          isString(argv.config)
            ? makeAbsolute(directory, argv.config)
            : makeAbsolute(directory, '.typed-test.ts'),
        )
      : Nothing,
    environment: toEvironment(argv.environment),
    timeout: argv.timeout,
    typeCheck: argv.typeCheck,
    watch: argv.watch,
    keepAlive: argv.keepAlive,
  }

  return options
}

function toEvironment(env: string): TestEvironment {
  switch (env.toLowerCase().trim()) {
    case 'node':
      return TestEvironment.Node
    case 'chrome':
      return TestEvironment.Chrome
    case 'chrome-headless':
      return TestEvironment.ChromeHeadless
    case 'chromium':
      return TestEvironment.Chromium
    case 'firefox':
      return TestEvironment.Firefox
    case 'opera':
      return TestEvironment.Opera
    case 'safari':
      return TestEvironment.Safari
    case 'ie':
      return TestEvironment.IE
  }

  return TestEvironment.Node
}
