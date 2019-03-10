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
  readonly id: Uuid
  readonly exportNames: string[]
  readonly filePath: string
  readonly additionalTests: NodeMetadata[]
}

export interface NodeMetadata extends NodePosition {
  readonly text: string
  readonly additionalTests: NodeMetadata[]
}

export const enum LogLevel {
  OFF,
  DEFAULT,
  INFO,
  DEBUG,
}

export interface Logger {
  // Default
  readonly log: (msg: string) => Promise<void>
  readonly error: (msg: string) => Promise<void>
  readonly clear: () => Promise<void>
  // Info
  readonly info: (msg: string) => Promise<void>
  // Debug
  readonly debug: (msg: string) => Promise<void>
  readonly time: (label: string) => (elapsed?: number) => Promise<void>
}

export interface TestIdToMetadataId extends ReadonlyMap<Uuid, Uuid> {}
export interface TestIdToTestConfig extends ReadonlyMap<Uuid, TestConfig> {}

export interface TestInformation {
  readonly testMetadataById: ReadonlyMap<Uuid, TestMetadata>
  readonly testIdToMetadataId: TestIdToMetadataId
  readonly testIdToTestConfig: TestIdToTestConfig
  readonly testResults: TestResult[]
}

export interface TestMetadataWithResult extends TestMetadata {
  readonly config: TestConfig
  readonly result: TestResult
  readonly additionalTests: NodeMetadataWithResult[]
}

export interface NodeMetadataWithResult extends NodeMetadata {
  readonly config: TestConfig
  readonly result: TestResult
  readonly additionalTests: NodeMetadataWithResult[]
}
