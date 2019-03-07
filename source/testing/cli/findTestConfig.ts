import { makeAbsolute } from '@typed/typescript'
import { relative } from 'path'
import { findConfigFile, sys } from 'typescript'
import { TestConfig } from './types'

export function findTestConfig(
  directory: string,
  fileName: string = '.typed-test.ts',
): TestConfig[] {
  const path = findConfigFile(
    directory,
    sys.fileExists,
    relative(directory, makeAbsolute(directory, fileName)),
  )

  if (!path) {
    throw new Error(`Unable to find TestConfig ${fileName}`)
  }

  const contents = require(path)
  const config = contents.hasOwnProperty('default') ? contents.default : contents

  return Array.isArray(config) ? config : [config]
}
