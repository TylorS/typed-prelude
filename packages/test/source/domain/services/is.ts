import { Is } from '@typed/lambda'
import { isFunction, isNumber, isObject, isString, or } from '@typed/logic'
import { maybeIs } from '@typed/maybe'
import { isUuid } from '@typed/uuid'
import { Test, TestCase, TestConfig, TestSuite } from '../model'

const maybeIsNumber = maybeIs(isNumber)

export const isTest: Is<Test> = or(isTestCase, isTestSuite)

export function isTestCase(test: unknown): test is TestCase {
  return (
    (test as Test).type === 'test' &&
    isTestConfig((test as Test).config) &&
    isFunction((test as TestCase).runTest)
  )
}

export function isTestSuite(test: unknown): test is TestSuite {
  return (
    (test as Test).type === 'suite' &&
    isTestConfig((test as Test).config) &&
    Array.isArray((test as TestSuite).tests) &&
    (test as TestSuite).tests.every(isTest)
  )
}

export function isTestConfig(x: unknown): x is TestConfig {
  return (
    isObject(x) &&
    isUuid((x as TestConfig).id) &&
    isString((x as TestConfig).name) &&
    maybeIsNumber((x as TestConfig).timeout) &&
    maybeIsNumber((x as TestConfig).modifier)
  )
}
