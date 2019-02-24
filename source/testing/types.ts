import { NodePosition } from '@typed/typescript'
import { Uuid } from '../uuid'

export const TYPED_TEST = Symbol('Test')
export const TYPED_TEST_COLLECTION = Symbol('TestCollection')

export type Test = TestCollection | RunningTest

export interface TestCollection {
  readonly [TYPED_TEST_COLLECTION]: TestConfig
  readonly tests: Test[]
}

export interface RunningTest {
  readonly [TYPED_TEST]: TestConfig
  readonly runTest: (spec: TestSpec) => Promise<TestResult>
}

export const enum TestModifier {
  DEFAULT,
  ONLY,
  SKIP,
}

export const enum TestEnvironment {
  DEFAULT,
  NODE,
  BROWSER,
  BOTH,
}

export interface TestConfig {
  readonly id: Uuid
  readonly name: string
  readonly modifier: TestModifier
  readonly timeout?: number
}

export interface TestSpec {
  readonly testId: Uuid
  readonly timeout: number
  readonly skip: boolean
}

export type TestResult = PassedTestResult | SkippedTestResult | FailedTestResult | GroupResult

export type PassedTestResult = { readonly type: 'pass'; readonly testId: Uuid }
export type SkippedTestResult = { readonly type: 'skip'; readonly testId: Uuid }
export type FailedTestResult = {
  readonly testId: Uuid
  readonly type: 'fail'
  readonly error: Error
}
export type GroupResult = {
  readonly testId: Uuid
  readonly type: 'group'
  readonly results: TestResult[]
}

export interface TestMetadata extends NodeMetadata {
  readonly exportNames: string[]
  readonly filePath: string
  readonly additionalTests: NodeMetadata[]
}

export interface NodeMetadata extends NodePosition {
  readonly text: string
  readonly additionalTests: NodeMetadata[]
}

export const enum LogLevel {
  DEFAULT,
  INFO,
  DEBUG,
}

export interface Logger {
  // Default
  readonly log: (msg: string) => Promise<void>
  readonly error: (msg: string) => Promise<void>
  readonly clear: (msg: string) => Promise<void>
  // Info
  readonly info: (msg: string) => Promise<void>
  // Debug
  readonly debug: (msg: string) => Promise<void>
}
