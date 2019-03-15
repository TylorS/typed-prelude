import { makeAbsolute } from '@typed/typescript'
import { existsSync } from 'fs'
import { TestOptions } from './types'

export function findTestOptions(
  directory: string,
  fileName: string = '.typed-test.ts',
): TestOptions[] {
  const path = makeAbsolute(directory, fileName)

  if (!existsSync(path)) {
    throw new Error(`Unable to find TestConfig ${fileName}`)
  }

  const contents = require(path)
  const config = contents.hasOwnProperty('default') ? contents.default : contents

  return Array.isArray(config) ? config : [config]
}
