import { Node, SourceFile } from 'ts-simple-ast'
import { CompilerOptions } from 'typescript'
import { Tuple } from '../tuple'

export interface TsConfig {
  compilerOptions: CompilerOptions
  configPath: string
  extends?: string | string[]
  files?: string[]
  include?: string[]
  exclude?: string[]
}

export interface DependencyMap
  extends Map<
      string,
      {
        sourceFile: SourceFile
        moduleId: number
        exportMetadata: ExportMetadata[]
        dependencies: Dependency[]
      }
    > {}
export interface DependentMap extends Map<string, string[]> {}

export interface Dependency {
  readonly importNames: Array<Tuple<string, string>>
  readonly type: DependencyType
  readonly moduleSpecifier: string
  readonly moduleId: number
  readonly resolvedFilePath: string
}

export type DependencyType =
  | 'named'
  | 'namespace'
  | 'import-require'
  | 'commonjs-require'
  | 'dynamic-import'
  | 're-export'

export interface ExportMetadata {
  readonly exportNames: Array<Tuple<string, string>>
  readonly sourceFile: SourceFile
  readonly node: Node
}

export interface NodePosition {
  readonly position: Tuple<number, number>
  readonly startLine: number
  readonly endLine: number
  readonly numberOfLines: number
}

export interface NodeMetadata extends NodePosition {
  readonly text: string
}
