import { isString, isUndefined } from '@typed/logic'
import { Maybe, Nothing } from '@typed/maybe'
import { makeAbsolute } from '@typed/typescript'
import yargs from 'yargs'
import { LogLevel } from '../types'
import { CliOptions, TestEvironment } from './types'

export type ParseCliArgsOptions = {
  directory: string
  args: string[]
  version?: string
}

export function parseCliArgs({ directory, args, version }: ParseCliArgsOptions): CliOptions {
  let argumentParser = yargs
    .option('config', {
      alias: 'c',
      describe: 'Absolute or relative path to @typed/test configuration.',
    })
    .option('tsconfig', {
      alias: 'ts',
      describe: 'Absolute or relative path to tsconfig.json',
      string: true,
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
    })
    .option('timeout', {
      alias: 't',
      describe: 'Time in which your tests will be required to complete.',
      number: true,
    })
    .option('typeCheck', {
      describe: 'Type Check your test files in another process.',
      boolean: true,
    })
    .option('watch', {
      alias: 'w',
      describe: 'Re-run tests as their dependencies changes.',
      boolean: true,
    })
    .option('keepAlive', {
      describe: 'Keep browsers open after running tests.',
      boolean: true,
    })
    .option('loglevel', {
      alias: 'l',
      describe: 'Change the logging level',
      choices: ['off', 'default', 'info', 'debug'],
    })
    .help()

  if (!isUndefined(version)) {
    argumentParser = argumentParser.version(version)
  }

  const parsedArguments = argumentParser.parse(args)

  const env = parsedArguments.environment ? toEvironment(parsedArguments.environment) : null

  const options: CliOptions = {
    fileGlobs: parsedArguments._.length === 0 ? Nothing : Maybe.of(parsedArguments._),
    config: parsedArguments.config
      ? Maybe.of(
          isString(parsedArguments.config)
            ? makeAbsolute(directory, parsedArguments.config)
            : makeAbsolute(directory, '.typed-test.ts'),
        )
      : Nothing,
    tsConfig: parsedArguments.tsconfig ? Maybe.of(parsedArguments.tsconfig) : Nothing,
    environment: Maybe.of(env),
    timeout: Maybe.of(parsedArguments.timeout),
    typeCheck: Maybe.of(parsedArguments.typeCheck),
    watch: Maybe.of(parsedArguments.watch),
    keepAlive: Maybe.of(parsedArguments.keepAlive),
    logLevel: parsedArguments.loglevel ? Maybe.of(toLogLevel(parsedArguments.loglevel)) : Nothing,
    fuseBoxOptions: Nothing,
  }

  return options
}

function toLogLevel(logLevel: string): LogLevel {
  if (logLevel === 'off') {
    return LogLevel.OFF
  }

  if (logLevel === 'info') {
    return LogLevel.INFO
  }

  if (logLevel === 'debug') {
    return LogLevel.DEBUG
  }

  return LogLevel.DEFAULT
}

function toEvironment(env: string): TestEvironment | null {
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

  return null
}
