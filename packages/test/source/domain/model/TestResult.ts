import * as t from '@typed/io'

export interface PassedTestResult extends t.TypeOf<typeof PassedTestResult> {}
export const PassedTestResult = t.record({
  type: t.literal('pass'),
})

export interface SkippedTestResult extends t.TypeOf<typeof SkippedTestResult> {}
export const SkippedTestResult = t.record({
  type: t.literal('skip'),
})

export interface TodoTestResult extends t.TypeOf<typeof TodoTestResult> {}
export const TodoTestResult = t.record({
  type: t.literal('todo'),
})

export type FailedTestResult = t.TypeOf<typeof FailedTestResult>
export const FailedTestResult = t.record({
  type: t.literal('fail'),
  message: t.String,
  stack: t.maybe(t.String),
  line: t.maybe(t.Number),
})

export interface SuiteResult {
  readonly type: 'suite'
  readonly results: TestResults
}
export const SuiteResult: t.Type<SuiteResult> = t.recursive((self) =>
  t.record({
    type: t.literal('suite'),
    results: t.array(
      t.union([PassedTestResult, FailedTestResult, SkippedTestResult, TodoTestResult, self]),
    ),
  }),
)

export type TestResult = t.TypeOf<typeof TestResult>
export const TestResult = t.union([
  PassedTestResult,
  FailedTestResult,
  SkippedTestResult,
  TodoTestResult,
  SuiteResult,
])

export interface TestResults extends t.TypeOf<typeof TestResults> {}
export const TestResults = t.array(TestResult)
