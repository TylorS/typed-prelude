import { memoize } from '@typed/lambda'
import resolve from 'resolve'
import { createMatchPath } from 'tsconfig-paths'
import { preferEsModule as packageFilter } from '../common/preferEsModule'
import { TsConfig } from '../types'

const mainFields = ['module', 'jsnext:main', 'main']
const browserMainFiles = ['module', 'jsnext:main', 'browser', 'main']
const moduleDirectory = ['node_modules', '@types']

export function createResolveFilePath({
  extensions,
  browser,
  tsConfig,
}: CreateResolveFilePathOptions) {
  const fields = browser ? browserMainFiles : mainFields
  const options: resolve.SyncOpts = {
    extensions,
    packageFilter,
    moduleDirectory,
    basedir: '',
  }
  const matchPath = tryCreateMatchPath(fields, tsConfig)

  return function resolveFilePath(basedir: string, moduleSpecifier: string) {
    try {
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
  mainFields: string[],
  { compilerOptions }: TsConfig,
) {
  try {
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
  tsConfig: TsConfig
  browser?: boolean
}
