import { Project, SourceFile, ts } from 'ts-simple-ast'
import { emitToMemory, MemoryResult } from '../emitToMemory'

export type EmitResultsOptions = {
  directory: string
  sourceFiles: SourceFile[]
  project: Project
  transformers?: {
    before?: Array<ts.TransformerFactory<ts.SourceFile>>
    after?: Array<ts.TransformerFactory<ts.SourceFile>>
    afterDeclarations?: Array<ts.TransformerFactory<ts.SourceFile | ts.Bundle>>
  }
}
export type EmitResults = Map<string, MemoryResult>

export function emitResults({ sourceFiles, ...options }: EmitResultsOptions): EmitResults {
  const results: EmitResults = new Map()

  sourceFiles.forEach(sourceFile =>
    results.set(sourceFile.getFilePath(), emitToMemory({ sourceFile, ...options })),
  )

  return results
}
