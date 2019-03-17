import { Disposable } from '@most/types'
import { Logger } from '@typed/common/logger'
import { Arity1 } from '@typed/lambda'
import { Immutable } from '@typed/objects'
import {
  CompilerOptions,
  LanguageService,
  Node,
  Program,
  SourceFile,
  TypeChecker,
} from 'typescript'

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
  readonly getSourceFiles: () => {
    sourceFiles: SourceFile[]
    program: Program
    typeChecker: TypeChecker
  }
  watchSourceFiles(
    cb: Arity1<{
      sourceFiles: SourceFile[]
      program: Program
      typeChecker: TypeChecker
    }>,
    options: WatchSourceFilesOptions,
  ): Promise<Disposable>
}

export type WatchSourceFilesOptions = {
  debounceMS?: number
  logger?: Logger
}

export type DependencyMap = Record<string, string[]>

export type DependencyManager = {
  readonly setDependenciesOfFile: (file: string, dependencies: string[]) => void
  readonly setDependentsOfFile: (file: string, dependents: string[]) => void
  readonly removeFile: (file: string) => void
  readonly getDependenciesOfFile: (file: string) => string[]
  readonly getDependentsOfFile: (file: string) => string[]
}

export type FileVersionManager = {
  readonly addFileVersion: (file: string) => void
  readonly updateFileVersion: (file: string) => void
  readonly removeFileVersion: (file: string) => void
  readonly applyChanges: () => Array<[string, number]>
  readonly hasFileVersion: (file: string) => boolean
  readonly fileVersionOf: (file: string) => number
}

export interface NodeTree {
  node: Node
  children: NodeTree[]
}

export interface ExportMetadata {
  sourceFile: SourceFile
  exportNames: string[]
  node: Node
}

export interface NodePosition {
  position: [number, number]
  startLine: number
  endLine: number
  numberOfLines: number
}

export const enum CompilationTarget {
  BROWSER = 'browser',
  SERVER = 'server',
  UNIVERSAL = 'universal',
  ELECTRON = 'electron',
}
