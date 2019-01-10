import { CompilerOptions, LanguageService, Node, Program, SourceFile } from 'typescript'
import { Immutable } from '../objects'

export interface TsConfig {
  readonly compilerOptions: CompilerOptions
  readonly configPath: string
  readonly extends?: string | string[]
  readonly files?: string[]
  readonly include?: string[]
  readonly exclude?: string[]
}

export type Project = {
  readonly languageService: LanguageService
  readonly dependencyManager: DependencyManager
  readonly fileVersionManager: FileVersionManager
  readonly fileGlobs: string[]
  readonly dependencyMap: Immutable<DependencyMap>
  readonly dependentMap: Immutable<DependencyMap>
  readonly getSourceFiles: () => { sourceFiles: SourceFile[]; program: Program }
}

export type DependencyMap = Record<string, string[]>

export type DependencyManager = {
  readonly setDependenciesOfFile: (file: string, dependencies: string[]) => void
  readonly removeFile: (file: string) => void
  readonly getDependenciesOfFile: (file: string) => string[]
  readonly getDependentsOfFile: (file: string) => string[]
}

export type FileVersionManager = {
  readonly addFileVersion: (file: string) => void
  readonly updateFileVersion: (file: string) => void
  readonly removeFileVersion: (file: string) => void
  readonly hasFileVersion: (file: string) => boolean
  readonly fileVersionOf: (file: string) => number
}

export interface NodeTree {
  node: Node
  children: NodeTree[]
}

export interface ExportMetadata {
  exportNames: string[]
  node: Node
}

export interface NodePosition {
  position: [number, number]
  startLine: number
  endLine: number
  numberOfLines: number
}
