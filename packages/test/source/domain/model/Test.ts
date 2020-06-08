import { Flatten, UnNest } from '@typed/common'
import { Capabilities, Effects, TypeOf } from '@typed/effects'
import * as t from '@typed/io'
import { isGenerator } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { Base, NewType } from '@typed/new-type'
import { Uuid } from '@typed/uuid'
import { Key } from './common'
import { TestResult, TestResults } from './TestResult'

/**
 * A list of Tests and Test Suites
 */
export type Tests = ReadonlyArray<Test>

/**
 * Either a Test or TestSuite
 */
export type Test = TestCase | TestSuite
export const Test: t.Type<Test> = t.union([t.lazy(() => TestCase), t.lazy(() => TestSuite)])

export type TestId = Key<Test>
export const TestId = Key<TestId>('TestId')

export type TestType = Test['type']
export const TestType: t.Type<TestType> = t.union([t.literal('test'), t.literal('suite')])

/**
 * An individual Test unit. E is the environment in which it is required to run the test. C is
 * the desired test configuration. However, the interpreter or "runner" of the test will provide
 * runTest with the TestSpec it wishes (e.g. it's parent test suite is marked as skip:true). Similarly,
 * it's up to the test to ultimately decide what it does with that information contained in the TestSpec.
 */
export interface TestCase<E extends {} = any, C extends TestConfig = TestConfig> {
  readonly type: 'test'
  readonly config: C
  readonly runTest: () => Effects<E, TestResult>
}

export const TestCase: t.Type<TestCase> = t.record(
  {
    type: t.literal('test'),
    config: t.lazy(() => TestConfig),
    runTest: t.refinement(t.Function, (f): f is TestCase['runTest'] => isGenerator(f())),
  },
  `TestCase`,
)

/**
 * Get the combined environment of a Test, TestSuite, or list of the two.
 */
export type TestEnvOf<A> = A extends TestSuite
  ? GetCombinedTestEnv<A['tests']>
  : A extends TestCase
  ? GetTestEnv<A>
  : A extends ReadonlyArray<Test>
  ? GetCombinedTestEnv<A>
  : unknown

/**
 * Extract the Effects required for a Test
 */
export type GetTestEnv<A extends TestCase> = Capabilities<TypeOf<A['runTest']>>

/**
 * Get the combined environment requirement needed for as set of Tests
 */
export type GetCombinedTestEnv<A extends Tests> = UnNest<Flatten<ToTestEnvConsList<A>, {}>>

/**
 * This is just a collection of tests with a shared configuration
 */
export interface TestSuite<C extends TestConfig = TestConfig, T extends Tests = Tests> {
  readonly type: 'suite'
  readonly config: C
  readonly tests: T
}

export const TestSuite: t.Type<TestSuite> = t.record({
  type: t.literal('suite'),
  config: t.lazy(() => TestConfig),
  tests: t.array(Test),
})

/**
 * The tests in a TestSuite
 */
export type TestsOf<A> = A extends TestSuite<any, infer Tests> ? Tests : never

/**
 * Get the TestConfig from a TestLike
 */
export type ConfigOf<A> = A extends Test ? A['config'] : never

/**
 * Extract the Name of a TestLike
 */
export type NameOf<A> = A extends Test ? Base<ConfigOf<A>['name']> : never

/**
 * Extract the Timeout of a TestLike
 */
export type TimeoutOf<A> = A extends Test
  ? ConfigOf<A>['timeout'] extends Maybe<infer R>
    ? R
    : never
  : never

/**
 * Extract the Modifier of a TestLike
 */

export type ModifierOf<A> = A extends Test
  ? ConfigOf<A>['modifier'] extends TestModifier
    ? ConfigOf<A>['modifier']
    : 'Default'
  : 'Default'

export type ModifiersOf<A extends Tests> = {
  [K in keyof A]: A[K] extends TestCase
    ? ModifierOf<A[K]>
    : A[K] extends TestSuite
    ? ModifierOf<A[K]> extends 'Skip' | 'Todo'
      ? ModifierOf<A[K]>
      : ModifierOf<A[K]> | ModifiersOf<TestsOf<A[K]>>
    : never
}[number]

/**
 * The configuration defined for a test
 */
export interface TestConfig<
  Name extends string = string,
  Timeout extends number = number,
  Modifier extends TestModifier = TestModifier
> {
  readonly id: Uuid
  readonly name: TestName<Name>
  readonly modifier: Modifier
  readonly timeout: Maybe<Timeout>
}

export const TestConfig: t.Type<TestConfig> = t.record({
  id: t.Uuid,
  name: t.refinement(t.String, (_): _ is TestName<string> => true),
  modifier: t.lazy(() => TestModifier),
  timeout: t.maybe(t.Number),
})

/**
 * Update any part of the test config in a TestConfig for a given TestLike.
 * If 'never' is provided for any parameter the current value within the TestLike is used.
 */
export type UpdateTestConfig<
  A extends Test,
  Name extends string = string,
  Timeout extends number = number,
  Modifier extends TestModifier = TestModifier
> = A extends TestSuite
  ? TestSuite<
      TestConfig<
        IsNever<Name> extends true ? NameOf<A> : Name,
        IsNever<Timeout> extends true ? TimeoutOf<A> : Timeout,
        IsNever<Modifier> extends true ? ModifierOf<A> : Modifier
      >,
      TestsOf<A>
    >
  : TestCase<
      TestEnvOf<A>,
      TestConfig<
        IsNever<Name> extends true ? NameOf<A> : Name,
        IsNever<Timeout> extends true ? TimeoutOf<A> : Timeout,
        IsNever<Modifier> extends true ? ModifierOf<A> : Modifier
      >
    >

export type UpdateName<Name extends string, T extends Test> = UpdateTestConfig<
  T,
  Name,
  never,
  never
>

export type UpdateTimeout<Timeout extends number, T extends Test> = UpdateTestConfig<
  T,
  never,
  Timeout,
  never
>

export type UpdateModifier<Modifier extends TestModifier, T extends Test> = UpdateTestConfig<
  T,
  never,
  never,
  Modifier
>

/**
 * A TestName
 */
export type TestName<A extends string> = NewType<A, 'TestName'>

/**
 * Modifiers for how tests should be run
 */
export const DefaultTestModifier = t.literal('Default')
export const SkipTestModifier = t.literal('Skip')
export const OnlyTestModifier = t.literal('Only')
export const TodoTestModifier = t.literal('Todo')

export type TestModifier = t.TypeOf<typeof TestModifier>
export const TestModifier = t.union([
  DefaultTestModifier,
  SkipTestModifier,
  OnlyTestModifier,
  TodoTestModifier,
])

/* Test Results */

/* End: Test Results */

/* Effects */
export type RunTests<E> = <A extends Tests>(tests: A) => Effects<E & TestEnvOf<A>, TestResults>
/* End: Effects */

/* Internal */

type ToTestEnvConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [TestEnvOf<T>, ToTestEnvConsList<TS>]
  : unknown

type IsNever<A> = [A] extends [never] ? true : false
