import { Diagnostic, Program } from 'typescript'
import { diagnosticsToString } from '../common/diagnosticsToString'
import { makeAbsolute } from '../common/makeAbsolute'

export function typeCheckFiles(cwd: string, files: string[], program: Program): string {
  const absolutePaths = files.map(x => makeAbsolute(cwd, x))
  const sourceFilesToCheck = program
    .getSourceFiles()
    .filter(x => absolutePaths.indexOf(makeAbsolute(cwd, x.fileName)) !== -1)

  return diagnosticsToString(
    sourceFilesToCheck.reduce(
      (xs, x) => xs.concat(program.getSemanticDiagnostics(x)),
      [] as Diagnostic[],
    ),
    program.getCurrentDirectory(),
  )
}
