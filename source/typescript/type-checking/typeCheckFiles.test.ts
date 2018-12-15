import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { createProgram } from 'typescript'
import { findTsConfig } from '../findTsConfig'
import { typeCheckFiles } from './typeCheckFiles'

export const test = describe(`typeCheckFiles`, [
  given(`a directory, a list of files, and a Program`, [
    it(`returns results of type checking`, ({ ok }) => {
      const fixtureFilePath = join(__dirname, 'test-fixtures/failingTypeCheck.ts')
      const tsConfig = findTsConfig({ directory: __dirname })
      const program = createProgram({
        options: tsConfig.compilerOptions,
        rootNames: [fixtureFilePath],
      })
      const results = typeCheckFiles(__dirname, [fixtureFilePath], program)

      ok(results.includes(`fixtures/failingTypeCheck.ts (2,3):`))
      ok(results.includes(`Type '"bar"' is not assignable to type '"foo"'`))
    }),
  ]),
])
