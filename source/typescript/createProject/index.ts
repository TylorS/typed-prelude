// tslint:disable-next-line:no-reference
/// <reference path="../../external-types/nsfw.d.ts" />

import { Disposable } from '@most/types'
import { Arity1, memoize, pipe } from '@typed/lambda'
import { chain, filter, map, uniq } from '@typed/list'
import { first, Tuple } from '@typed/tuple'
import minimatch from 'minimatch'
import nsfw from 'nsfw'
import { dirname, join } from 'path'
import { Program, SourceFile } from 'typescript'
import { findFilePaths } from '../common/findFilePaths'
import { getFileExtensions } from '../common/getFileExtensions'
import { makeAbsolute } from '../common/makeAbsolute'
import { createDependencyManager } from '../createDependencyManager/createDependencyManager'
import { createFileVersionManager } from '../createFileVersionManager'
import { createLanguageService } from '../createLanguageService/createLanguageService'
import { createResolveFilePath } from '../resolveFilePath'
import { DependencyMap, Project, TsConfig, WatchSourceFilesOptions } from '../types'

export type CreateProjectOptions = {
  tsConfig: TsConfig
  directory: string
  fileGlobs?: string[]
  syntaxOnly?: boolean
  skipDependencies?: boolean
  browser?: boolean
}

export function createProject(options: CreateProjectOptions): Project {
  const { directory, browser, tsConfig } = options
  const { languageService, fileVersions, fileGlobs } = createLanguageService(options)
  const { compilerOptions } = tsConfig
  const dependencyMap: DependencyMap = {}
  const dependentMap: DependencyMap = {}
  const dependencyManager = createDependencyManager({ dependencyMap, dependentMap })
  const fileVersionManager = createFileVersionManager(fileVersions)
  const extensions = [...getFileExtensions({ ...compilerOptions, allowJs: true }), '.d.ts']
  const resolvePath = createResolveFilePath({ extensions, browser, tsConfig })
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

  function getSourceFilesFromFilePaths(filePaths: string[], program: Program): SourceFile[] {
    const sourceFiles = filter(
      Boolean,
      map(path => program.getSourceFile(path), filePaths),
    ) as SourceFile[]

    return sourceFiles
  }

  function updateDependencies(sourceFile: SourceFile, program: Program) {
    const fileName = makeAbsolute(directory, sourceFile.fileName)
    const basedir = dirname(fileName)
    // This is internal to TS but significantly improves the speed at we find our dependencies
    const imports: Array<{ text: string }> = (sourceFile as any).imports || []
    const dependencies = imports.map(x => resolvePath(basedir, x.text))

    if (!fileVersionManager.hasFileVersion(fileName)) {
      fileVersionManager.addFileVersion(fileName)
    }

    dependencyManager.setDependenciesOfFile(fileName, dependencies)

    getSourceFilesFromFilePaths(dependencies, program).forEach(sourceFile =>
      updateDependencies(sourceFile, program),
    )
  }

  const initialFiles = findFilePaths(directory, fileGlobs)
  initialFiles.forEach(fileVersionManager.addFileVersion)

  if (!options.skipDependencies) {
    const program = languageService.getProgram()!
    const sourceFiles = program.getSourceFiles()

    // Get Initial Dependencies
    sourceFiles.forEach(sourceFile => updateDependencies(sourceFile, program))
  }

  function getSourceFiles() {
    const changedFiles = getChangedFiles(fileVersionManager.applyChanges())
    const program = languageService.getProgram()!
    const typeChecker = program.getTypeChecker()
    const sourceFiles = getSourceFilesFromFilePaths(changedFiles, program)

    return { sourceFiles, program, typeChecker }
  }

  async function watchSourceFiles(
    cb: Arity1<ReturnType<typeof getSourceFiles>, Promise<void>>,
    options: WatchSourceFilesOptions = {},
  ): Promise<Disposable> {
    const { debounceMS = 1000, logger } = options
    let runningCallback = false
    let shouldRerunCallback = false

    async function runCallback() {
      if (runningCallback) {
        shouldRerunCallback = true
        return
      }

      runningCallback = true
      const { sourceFiles, program, typeChecker } = getSourceFiles()

      if (sourceFiles.length > 0) {
        await cb({ sourceFiles, program, typeChecker })

        sourceFiles.forEach(sourceFile => updateDependencies(sourceFile, program))
      }

      runningCallback = false

      if (shouldRerunCallback) {
        shouldRerunCallback = false
        runCallback()
      }
    }

    function handleEvents(events: nsfw.Event[]) {
      events.forEach(event => {
        if (event.action === 0) {
          const { directory, file } = event
          const path = join(directory, file)

          fileVersionManager.addFileVersion(path)

          if (logger) {
            logger.debug(`Added ${path}`)
          }
        }

        if (event.action === 1) {
          const { directory, file } = event
          const path = join(directory, file)

          fileVersionManager.removeFileVersion(path)
          dependencyManager.removeFile(path)

          if (logger) {
            logger.debug(`Deleted ${path}`)
          }
        }

        if (event.action === 2) {
          const { directory, file } = event
          const path = join(directory, file)

          fileVersionManager.updateFileVersion(path)

          if (logger) {
            logger.debug(`Updated ${path}`)
          }
        }

        if (event.action === 3) {
          const { directory, oldFile, newDirectory, newFile } = event
          const oldPath = join(directory, oldFile)
          const newPath = join(newDirectory, newFile)

          fileVersionManager.removeFileVersion(oldPath)
          fileVersionManager.addFileVersion(newPath)

          if (logger) {
            logger.debug(`Renamed ${oldPath} to ${newPath}`)
          }
        }
      })

      runCallback()
    }

    const watcher = await nsfw(directory, handleEvents, { debounceMS })

    await watcher.start()

    runCallback()

    const dispose = () => watcher.stop()

    return { dispose }
  }

  return {
    languageService,
    dependencyManager,
    fileVersionManager,
    fileGlobs,
    dependencyMap,
    dependentMap,
    getSourceFiles,
    watchSourceFiles,
  }
}
