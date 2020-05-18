import { combine, Effects } from '@typed/effects'
import {
  FailedTestResult,
  RunTest,
  RunTests,
  TestCase,
  TestEnvOf,
  TestModifier,
  TestResult,
  TestSuite,
} from '../domain'
import { EffectiveTests, getEffectiveTests, isTestCase, isTestSuite } from '../domain/services'

export const runTests: RunTests<unknown> = function* (tests) {
  const effectiveTests: EffectiveTests<typeof tests> = getEffectiveTests(tests)

  return yield* combine(...effectiveTests.map((t) => runTest(t)))
}

export const runTest: RunTest<unknown> = function* (test) {
  if (isTestCase(test)) {
    return yield* runTestCase(test as any)
  }

  if (isTestSuite(test)) {
    return yield* runTestSuite(test as any)
  }

  return { type: 'fail', message: 'Unknown Test Type' } as FailedTestResult
}

function* runTestCase<A extends TestCase>(test: A): Effects<TestEnvOf<A>, TestResult> {
  const { modifier } = test.config

  if (modifier === TestModifier.Skip) {
    return {
      type: 'skip',
    } as const
  }

  if (modifier === TestModifier.Todo) {
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
