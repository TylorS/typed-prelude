import { combine, Effects } from '@typed/effects'
import {
  FailedTestResult,
  RunTests,
  SkipTestModifier,
  Test,
  TestCase,
  TestEnvOf,
  TestResult,
  TestSuite,
  TodoTestModifier,
} from '../domain'
import { EffectiveTests, getEffectiveTests } from '../domain/services'

export const runTests: RunTests<unknown> = function* (tests) {
  const effectiveTests: EffectiveTests<typeof tests> = getEffectiveTests(tests)

  return yield* combine(...effectiveTests.map((t) => runTest(t)))
}

function* runTest(test: Test) {
  if (TestCase.is(test)) {
    return yield* runTestCase(test)
  }

  if (TestSuite.is(test)) {
    return yield* runTestSuite(test)
  }

  return { type: 'fail', message: 'Unknown Test Type' } as FailedTestResult
}

function* runTestCase<A extends TestCase>(test: A): Effects<TestEnvOf<A>, TestResult> {
  const { modifier } = test.config

  if (SkipTestModifier.is(modifier)) {
    return {
      type: 'skip',
    } as const
  }

  if (TodoTestModifier.is(modifier)) {
    return {
      type: 'todo',
    } as const
  }

  return yield* test.runTest()
}

function* runTestSuite<A extends TestSuite>(test: A): Effects<TestEnvOf<A>, TestResult> {
  return {
    type: 'suite',
    results: yield* combine(...test.tests.map(runTest)),
  } as const
}
