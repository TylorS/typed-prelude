import { newDefaultScheduler } from '@most/scheduler'
import { describe, given, it } from '@typed/test'
import { createProject, findTsConfig } from '@typed/typescript'
import { join } from 'path'
import { findTestMetadata } from '../findTestMetadata'
import { createTestLogger } from '../logging'
import { LogLevel } from '../types'
import { generateImportStatements } from './generateImportStatements'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`generateImportStatements`, [
  given(`TestMetadata[]`, [
    it(`returns import statements`, async ({ equal }) => {
      const directory = process.cwd()
      const tsConfig = findTsConfig({ directory })
      const fileName = join(testFixtures, 'import-statements.ts')
      const { getSourceFiles } = createProject({ directory, tsConfig, fileGlobs: [fileName] })
      const { logger } = createTestLogger({
        logLevel: LogLevel.OFF,
        scheduler: newDefaultScheduler(),
      })
      const {
        sourceFiles: [sourceFile],
        typeChecker,
      } = getSourceFiles()
      const testMetadata = await findTestMetadata({ sourceFile, typeChecker, logger })
      const [importStatements, numberOfTests] = generateImportStatements(testMetadata)

      equal(
        `import { basicPassingTest as test0, basicFailingTest as test1 } from '/Users/tylors/code/tylors/typed-prelude-next/source/testing/generateTestBundle/test-fixtures/import-statements.ts'`,
        importStatements,
      )
      equal(2, numberOfTests)
    }),
  ]),
])
