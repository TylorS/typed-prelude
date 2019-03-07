import { describe, given, it } from '@typed/test'
import { findTestConfig } from './findTestConfig'
import { TestConfig, TestEvironment } from './types'

export const test = describe(`findTestConfig`, [
  given(`a directory and fileName that exists`, [
    it(`returns a TestConfig`, ({ equal }) => {
      const testConfig: TestConfig = {
        environment: TestEvironment.Chrome,
      }

      equal(testConfig, findTestConfig(__dirname, 'test-fixtures/test-config.ts'))
    }),
  ]),

  given(`a directory and fileName that does not exist`, [
    it(`throws an Error`, ({ throws }) => {
      throws(() => findTestConfig(__dirname, 'abc/test-config.ts'))
    }),
  ]),
])
