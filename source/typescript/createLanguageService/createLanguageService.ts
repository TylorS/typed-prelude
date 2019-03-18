import { createLanguageService as createLs, LanguageService } from 'typescript'
import { TsConfig } from '../types'
import { createLanguageServiceHost } from './createLanguageServiceHost'

export interface LanguageServiceOptions {
  tsConfig: TsConfig
  directory: string
  fileGlobs?: string[]
  syntaxOnly?: boolean
  fileVersions?: Record<string, { version: number; text: string }>
}

const DEFAULT_EXCLUDE = ['node_modules/**/*']

export function createLanguageService(
  options: LanguageServiceOptions,
): {
  languageService: LanguageService
  fileVersions: Record<string, { version: number; text: string }>
  fileGlobs: string[]
} {
  const { tsConfig, syntaxOnly, directory } = options
  const { files = [], include = [], exclude = DEFAULT_EXCLUDE, compilerOptions } = tsConfig
  const fileGlobs = options.fileGlobs
    ? options.fileGlobs
    : [...files, ...include, ...exclude.map(x => `!${x}`)]
  const fileVersions: Record<string, { version: number; text: string }> = options.fileVersions || {}
  const languageServiceHost = createLanguageServiceHost({
    directory,
    fileVersions,
    compilerOptions,
  })

  return {
    languageService: createLs(languageServiceHost, undefined, syntaxOnly),
    fileVersions,
    fileGlobs,
  }
}
