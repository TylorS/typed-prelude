import { readFileSync } from 'fs'
import { join } from 'path'
import {
  convertCompilerOptionsFromJson,
  createProgram,
  Diagnostic,
  flattenDiagnosticMessageText,
  getPreEmitDiagnostics,
  parseConfigFileTextToJson,
  Program,
} from 'typescript'

const rootDirectory = join(__dirname, '..')
const sourceDirectory = join(rootDirectory, 'source')
const tsconfigFileName = 'tsconfig.build.json'
const tsconfigFilePath = join(rootDirectory, tsconfigFileName)
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

const PACKAGES = [
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

for (const pkg of PACKAGES) {
  console.log(`Compiling ${pkg}...`)
  const pkgDirectory = join(sourceDirectory, pkg)
  const indexFile = join(pkgDirectory, 'index.ts')
  const cjsOptions = Object.assign({}, options, {
    outDir: join(pkgDirectory, 'cjs'),
  })
  const esmOptions = Object.assign({}, options, {
    outDir: join(pkgDirectory, 'esm'),
  })
  const cjsProgram = createProgram({ rootNames: [indexFile], options: cjsOptions })
  const esmProgram = createProgram({ rootNames: [indexFile], options: esmOptions })

  emitFiles(cjsProgram)
  emitFiles(esmProgram)
}

function emitFiles(program: Program) {
  const result = program.emit()
  const diagnostics = getPreEmitDiagnostics(program)
    .concat(result.diagnostics)
    .filter(Boolean)

  if (diagnostics.length > 0) {
    reportDiagnostics(diagnostics)

    process.exit(1)
  }
}

function reportDiagnostics(diagnostics: Diagnostic[]) {
  diagnostics.forEach((diagnostic: Diagnostic) => {
    const message = flattenDiagnosticMessageText(diagnostic.messageText, '\n')

    console.log(`${getFileInfo(diagnostic)} ${message}`)
  })
}

function getFileInfo(diagnostic: Diagnostic) {
  if (diagnostic.file && diagnostic.start) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)

    return `${diagnostic.file.fileName} (${line + 1},${character + 1}): `
  }

  return ''
}
