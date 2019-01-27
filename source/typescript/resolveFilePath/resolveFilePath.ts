import { memoize } from '@typed/lambda'
import resolve from 'resolve'
import { createMatchPath } from 'tsconfig-paths'
import { preferEsModule as packageFilter } from '../common/preferEsModule'
import { findTsConfig } from '../findTsConfig'

const mainFields = ['module', 'jsnext:main', 'main']
const browserMainFiles = ['module', 'jsnext:main', 'browser', 'main']
const moduleDirectory = ['node_modules', '@types']

export function createResolveFilePath({ extensions, browser }: CreateResolveFilePathOptions) {
  const fields = browser ? browserMainFiles : mainFields
  const options: resolve.SyncOpts = {
    extensions,
    packageFilter,
    moduleDirectory,
    basedir: '',
  }

  return function resolveFilePath(basedir: string, moduleSpecifier: string) {
    try {
      const matchPath = tryCreateMatchPath(basedir, fields)

      if (matchPath) {
        const path = matchPath(moduleSpecifier, undefined, undefined, extensions)

        if (path) {
          return path
        }
      }

      return resolve.sync(moduleSpecifier, { ...options, basedir })
    } catch (error) {
      // Didn't use matchPath - tried and failed to resolve
      if (error.code === 'MODULE_NOT_FOUND') {
        throw error
      }

      return resolve.sync(moduleSpecifier, options)
    }
  }
}

const tryCreateMatchPath = memoize(function tryCreateMatchPath(
  directory: string,
  mainFields: string[],
) {
  try {
    const { compilerOptions } = findTsConfig({ directory })
    const { baseUrl, paths } = compilerOptions

    if (baseUrl && paths) {
      return createMatchPath(baseUrl, paths, mainFields)
    }
  } catch {
    return null
  }
})

export type CreateResolveFilePathOptions = {
  extensions: string[]
  browser?: boolean
}
