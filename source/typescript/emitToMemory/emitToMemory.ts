import { extname } from 'path'
import Project, { SourceFile, ts } from 'ts-simple-ast'
import { Maybe, Nothing } from '../../maybe'
import { diagnosticsToString } from '../common/diagnosticsToString'

export type MemoryResult = {
  js: string
  map: Maybe<string>
  dts: Maybe<string>
}

export type EmitToMemoryOptions = {
  directory: string
  sourceFile: SourceFile
  project: Project
  transformers?: {
    before?: Array<ts.TransformerFactory<ts.SourceFile>>
    after?: Array<ts.TransformerFactory<ts.SourceFile>>
    afterDeclarations?: Array<ts.TransformerFactory<ts.SourceFile | ts.Bundle>>
  }
}

export function emitToMemory({
  directory,
  sourceFile,
  project,
  transformers,
}: EmitToMemoryOptions): MemoryResult {
  const result = project.emitToMemory({
    targetSourceFile: sourceFile,
    customTransformers: transformers,
  })

  if (result.getEmitSkipped()) {
    const error = new Error(
      `Unable to compile ${sourceFile.getFilePath()}\n ${diagnosticsToString(
        result.getDiagnostics().map(x => x.compilerObject),
        directory,
      )}`,
    )

    throw error
  }

  const files = result.getFiles()
  const { text: js } = files.find(x => extname(x.filePath) === '.js')!
  const map = files.find(x => extname(x.filePath) === '.map')
  const dts = files.find(x => extname(x.filePath) === '.ts')

  return {
    js,
    map: map ? Maybe.of(map.text) : Nothing,
    dts: dts ? Maybe.of(dts.text) : Nothing,
  }
}
