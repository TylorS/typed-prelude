import { Maybe } from '../../maybe'
import { MergeObjects } from '../../objects'
import { Uuid } from '../../uuid'
import { NodeMetadata, TestMetadata } from './parse'

export { Assertions } from '../../assertions'

export const TYPED_TEST = Symbol('@typed/Test')
export const TYPED_COLLECTION = Symbol('@typed/TestCollection')

export type Test = TestCollection | TestRunner

export type TestCollection = {
  readonly [TYPED_COLLECTION]: MergeObjects<TestConfig, { readonly tests: Test[] }>
}

export type TestRunner = {
  readonly [TYPED_TEST]: TestConfig
  readonly runTest: (options: TestOptions) => Promise<Exclude<TestResult, CollectionTestResult>>
}

export interface TestConfig {
  readonly name: string
  readonly timeout: Maybe<number>
  readonly modifier: TestModifier
}

export type TestModifier = 'default' | 'only' | 'skip'

export interface TestOptions {
  readonly timeout: number
  readonly skip: boolean
}

export type TestResult = CollectionTestResult | RunnerTestResult
export type RunnerTestResult = PassedTestResult | SkippedTestResult | FailedTestResult

export interface CollectionTestResult extends TestConfig {
  readonly type: 'collection'
  readonly results: TestResult[]
}

export interface PassedTestResult extends TestConfig {
  readonly type: 'passed'
}

export interface SkippedTestResult extends TestConfig {
  readonly type: 'skipped'
}

export interface FailedTestResult extends TestConfig {
  readonly type: 'failed'
  readonly error: Error
}

export type TestWithMetadataId = TestCollectionWithMetadataId | TestRunnerWithMetadataId

export interface TestCollectionWithMetadataId {
  readonly [TYPED_COLLECTION]: MergeObjects<
    WithMetadataId<TestConfig>,
    { readonly tests: TestWithMetadataId[] }
  >
}
export type WithMetadataId<A> = MergeObjects<A, { readonly metadataId: Uuid }>
export type WithMetadata<A> = MergeObjects<A, { readonly metadata: NodeMetadata | TestMetadata }>

export interface TestRunnerWithMetadataId {
  readonly [TYPED_TEST]: WithMetadataId<TestConfig>
  readonly runTest: (options: TestOptions) => Promise<Exclude<TestResult, CollectionTestResult>>
}

export type TestResultWithMetadataId =
  | CollectionTestResultWithMetadataId
  | WithMetadataId<PassedTestResult>
  | WithMetadataId<SkippedTestResult>
  | WithMetadataId<FailedTestResult>

export interface CollectionTestResultWithMetadataId extends CollectionTestResult {
  readonly metadataId: Uuid
  readonly results: TestResultWithMetadataId[]
}

export type TestResultWithMetadata =
  | CollectionTestResultWithMetadata
  | WithMetadata<PassedTestResult>
  | WithMetadata<SkippedTestResult>
  | WithMetadata<FailedTestResult>

export interface CollectionTestResultWithMetadata extends CollectionTestResult {
  readonly results: TestResultWithMetadata[]
  readonly metadata: NodeMetadata | TestMetadata
}

export interface TestStats {
  readonly passed: number
  readonly failed: number
  readonly skipped: number
}
