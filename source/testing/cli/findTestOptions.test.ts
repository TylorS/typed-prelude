import { describe, given, it } from '@typed/test'
import { findTsConfig, installNodeSupport } from '@typed/typescript'
import { findTestOptions } from './findTestOptions'
import { TestEvironment, TestOptions } from './types'

export const test = describe(`findTestConfig`, [
  given(`a directory and fileName that exists`, [
    it(`returns a TestConfig`, ({ equal }) => {
      const testConfig: TestOptions = {
        environment: TestEvironment.Chrome,
      }

      const dispose = installNodeSupport({
        directory: __dirname,
        compilerOptions: findTsConfig({ directory: __dirname }).compilerOptions,
      })

      equal([testConfig], findTestOptions(__dirname, 'test-fixtures/test-config.ts'))

      dispose()
    }),
  ]),

  given(`a directory and fileName that does not exist`, [
    it(`throws an Error`, ({ throws }) => {
      throws(() => findTestOptions(__dirname, 'abc/test-config.ts'))
    }),
  ]),
])
