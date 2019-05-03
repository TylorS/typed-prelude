import { readFileSync } from 'fs'
import { join } from 'path'
import {
  convertCompilerOptionsFromJson,
  Diagnostic,
  flattenDiagnosticMessageText,
  parseConfigFileTextToJson,
} from 'typescript'

export const PACKAGES = [
  'common',
  'lambda',
  'disposable',
  'new-type',
  'strings',
  'timer',
  'list',
  'subscription',
  'tuple',
  'either',
  'maybe',
  'env',
  'loadable',
  'promises',
  'history',
  'http',
  'logger',
  'logic',
  'math',
  'routing',
  'storage',
  'uuid',
  'objects',
]

export const rootDirectory = join(__dirname, '..')
export const sourceDirectory = join(rootDirectory, 'packages')
const tsconfigFileName = 'tsconfig.json'
const tsconfigFilePath = join(sourceDirectory, tsconfigFileName)
const tsconfigContents = readFileSync(tsconfigFilePath).toString()
const { config } = parseConfigFileTextToJson(tsconfigFileName, tsconfigContents)
const { options, errors } = convertCompilerOptionsFromJson(
  config.compilerOptions,
  rootDirectory,
  tsconfigFileName,
)

if (errors && errors.length > 0) {
  reportDiagnostics(errors)

  process.exit(1)
}

export const compilerOptions = options

export function reportDiagnostics(diagnostics: Diagnostic[]) {
  diagnostics.forEach((diagnostic: Diagnostic) => {
    const message = flattenDiagnosticMessageText(diagnostic.messageText, '\n')

    console.log(`${getFileInfo(diagnostic)} ${message}`)
  })
}

export function getFileInfo(diagnostic: Diagnostic) {
  if (diagnostic.file && diagnostic.start) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)

    return `${diagnostic.file.fileName} (${line + 1},${character + 1}): `
  }

  return ''
}
