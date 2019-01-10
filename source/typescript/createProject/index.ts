import minimatch from 'minimatch'
import { dirname } from 'path'
import { Program } from 'typescript'
import { memoize } from '../../lambda'
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

  findFilePaths(directory, fileGlobs).forEach(fileVersionManager.addFileVersion)

  if (!options.skipDependencies) {
    const program = languageService.getProgram() as Program
    const sourceFiles = program.getSourceFiles()

    // Get Initial Dependencies
    sourceFiles.forEach(sourceFile => {
      const fileName = makeAbsolute(directory, sourceFile.fileName)
      const basedir = dirname(fileName)
      // This is internal to TS but significantly improves the speed at we find our dependencies
      const imports: Array<{ text: string }> = (sourceFile as any).imports || []

      fileVersionManager.addFileVersion(fileName)
      dependencyManager.setDependenciesOfFile(
        fileName,
        imports.map(x => resolvePath(basedir, x.text)),
      )
    })
  }

  function getSourceFiles() {
    const program = languageService.getProgram() as Program
    const sourceFiles = program
      .getSourceFiles()
      .filter(sourceFile => matchesGlob(makeAbsolute(directory, sourceFile.fileName)))

    return { sourceFiles, program }
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
