import minimatch from 'minimatch'
import { dirname } from 'path'
import { Program, SourceFile } from 'typescript'
import { memoize, pipe } from '../../lambda'
import { chain, filter, map, uniq } from '../../list'
import { first, Tuple } from '../../tuple'
import { findFilePaths } from '../common/findFilePaths'
import { getFileExtensions } from '../common/getFileExtensions'
import { makeAbsolute } from '../common/makeAbsolute'
import { createDependencyManager } from '../createDependencyManager/createDependencyManager'
import { createFileVersionManager } from '../createFileVersionManager'
import { createLanguageService } from '../createLanguageService/createLanguageService'
import { createResolveFilePath } from '../resolveFilePath'
import { DependencyMap, Project, TsConfig } from '../types'

export type CreateProjectOptions = {
  tsConfig: TsConfig
  directory: string
  fileGlobs?: string[]
  syntaxOnly?: boolean
  skipDependencies?: boolean
  browser?: boolean
}

export function createProject(options: CreateProjectOptions): Project {
  const { directory, browser } = options
  const { languageService, fileVersions, fileGlobs } = createLanguageService(options)
  const { compilerOptions } = options.tsConfig
  const dependencyMap: DependencyMap = {}
  const dependentMap: DependencyMap = {}
  const dependencyManager = createDependencyManager({ dependencyMap, dependentMap })
  const fileVersionManager = createFileVersionManager(fileVersions)
  const extensions = [...getFileExtensions({ ...compilerOptions, allowJs: true }), '.d.ts']
  const resolvePath = createResolveFilePath({ extensions, browser })
  const absoluteGlobs = fileGlobs.map(glob =>
    glob.startsWith('!')
      ? `!${makeAbsolute(directory, glob.slice(1))}`
      : makeAbsolute(directory, glob),
  )
  const matchesGlob = memoize(
    (file: string): boolean => {
      for (const glob of absoluteGlobs) {
        const matches = minimatch(file, glob)

        if (matches) {
          return true
        }
      }

      return false
    },
  )
  const getChangedFiles = pipe(
    chain((fileChange: Tuple<string, number>) => [
      ...dependencyManager.getDependentsOfFile(first(fileChange)),
      first(fileChange),
    ]),
    filter(matchesGlob),
    uniq,
  )

  const initialFiles = findFilePaths(directory, fileGlobs)

  initialFiles.forEach(fileVersionManager.addFileVersion)

  if (!options.skipDependencies) {
    const program = languageService.getProgram() as Program
    const sourceFiles = program.getSourceFiles()

    // Get Initial Dependencies
    sourceFiles.forEach(sourceFile => {
      const fileName = makeAbsolute(directory, sourceFile.fileName)
      const basedir = dirname(fileName)
      // This is internal to TS but significantly improves the speed at we find our dependencies
      const imports: Array<{ text: string }> = (sourceFile as any).imports || []
      const dependencies = imports.map(x => resolvePath(basedir, x.text))

      fileVersionManager.addFileVersion(fileName)
      dependencyManager.setDependenciesOfFile(fileName, dependencies)
    })
  }

  function getSourceFiles() {
    const changedFiles = getChangedFiles(fileVersionManager.applyChanges())
    const program = languageService.getProgram()!
    const typeChecker = program.getTypeChecker()
    const sourceFiles = filter(
      Boolean,
      map(path => program.getSourceFile(path), changedFiles),
    ) as SourceFile[]

    return { sourceFiles, program, typeChecker }
  }

  return {
    languageService,
    dependencyManager,
    fileVersionManager,
    fileGlobs,
    dependencyMap,
    dependentMap,
    getSourceFiles,
  }
}
