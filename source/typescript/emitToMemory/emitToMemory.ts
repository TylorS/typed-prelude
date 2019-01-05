import { extname } from 'path'
import Project, { SourceFile, ts } from 'ts-simple-ast'
import { Maybe, Nothing } from '../../maybe'
import { diagnosticsToString } from '../common/diagnosticsToString'
import { MemoryResult } from '../types'

export type EmitToMemoryOptions = {
  directory: string
  sourceFile: SourceFile
  project: Project
  moduleIds: Map<string, number>
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
  moduleIds,
  transformers,
}: EmitToMemoryOptions): MemoryResult {
  const filePath = sourceFile.getFilePath()
  const result = project.emitToMemory({
    targetSourceFile: sourceFile,
    customTransformers: transformers,
  })

  if (result.getEmitSkipped()) {
    const error = new Error(
      `Unable to compile ${filePath}\n ${diagnosticsToString(
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
    fileName: filePath,
    moduleId: moduleIds.get(filePath)!,
    js,
    map: map ? Maybe.of(JSON.parse(map.text)) : Nothing,
    dts: dts ? Maybe.of(dts.text) : Nothing,
  }
}
