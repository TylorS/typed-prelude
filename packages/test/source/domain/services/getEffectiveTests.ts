import { any } from '@typed/logic'
import {
  ConfigOf,
  ModifierOf,
  ModifiersOf,
  Test,
  TestCase,
  TestModifier,
  Tests,
  TestSuite,
  UpdateModifier,
} from '../model'
import { isTestCase } from './is'
import { updateModifier } from './updateTestConfig'

const hasModifier = (test: Test, modifier: TestModifier) => test.config.modifier === modifier

/**
 * Calculates the modifiers of all provided tests given the full context of tests. e.g. Tests with
 * a Default modifier will be marked with the Skip modifier in the event another test is marked with
 * an Only modifier.
 */
export type EffectiveTests<A extends Tests> = GetEffectiveTests<A, HasOnly<A>, false, true>

/**
 * Given a set of tests it returns that set of tests with their updated test modifiers given the context of the neighboring tests.
 * e.g. A test marked as 'only' should mark other's not marked as 'only' as 'skipped'
 */
export function getEffectiveTests<A extends Tests>(tests: A): EffectiveTests<A> {
  return updateTestModifiers<A>(
    tests,
    tests.some(hasSpecifiedModifier(TestModifier.Only)),
    false,
    true,
  )
}

function hasSpecifiedModifier(modifier: TestModifier) {
  return (test: Test): boolean => {
    if (isTestCase(test)) {
      return hasModifier(test, modifier)
    }

    return hasModifier(test, modifier) || any(hasSpecifiedModifier(modifier), test.tests)
  }
}

function updateTestModifiers<A extends Tests>(
  tests: Tests,
  shouldSkip: boolean,
  shouldTodo: boolean,
  canOverride: boolean,
): EffectiveTests<A> {
  return (tests.map(
    updateTestModifier(shouldSkip, shouldTodo, canOverride),
  ) as unknown) as EffectiveTests<A>
}

function updateTestModifier(shouldSkip: boolean, shouldTodo: boolean, canOverride: boolean) {
  const containsOnly = hasSpecifiedModifier(TestModifier.Only)

  return (test: Test): Test => {
    const shouldOverrideSkip = canOverride ? containsOnly(test) : false

    return isTestCase(test)
      ? updatedTestCase(test, shouldSkip && !shouldOverrideSkip, shouldTodo)
      : updateTestSuite(test, shouldSkip && !shouldOverrideSkip, shouldTodo, canOverride)
  }
}

function updatedTestCase(test: TestCase, shouldSkip: boolean, shouldTodo: boolean) {
  return updateModifier(
    shouldSkip ? TestModifier.Skip : shouldTodo ? TestModifier.Todo : test.config.modifier,
    test,
  )
}

function updateTestSuite(
  test: TestSuite,
  shouldSkip: boolean,
  shouldTodo: boolean,
  canOverride: boolean,
) {
  const hasSkip = shouldSkip || hasModifier(test, TestModifier.Skip)
  const hasTodo = shouldTodo || hasModifier(test, TestModifier.Todo)
  const canStillOverride = canOverride && !(hasSkip || hasTodo)

  const tests = updateTestModifiers(test.tests, hasSkip, hasTodo, canStillOverride)

  return updateModifier(
    shouldSkip ? TestModifier.Skip : shouldTodo ? TestModifier.Todo : test.config.modifier,
    {
      ...test,
      tests,
    },
  )
}

/* Internal Types */

type HasOnly<
  A extends ReadonlyArray<TestCase<any, any> | TestSuite<any, any>>
> = TestModifier.Only extends ModifiersOf<A> ? true : false

type GetEffectiveTests<
  A extends Tests,
  ShouldSkip extends true | false = false,
  ShouldTodo extends true | false = false,
  CanOverride extends true | false = true
> = {
  [K in keyof A]: A[K] extends Test
    ? GetEffectiveTest<A[K], ShouldSkip, ShouldTodo, CanOverride>
    : never
}

type GetEffectiveTest<
  A extends Test,
  ShouldSkip extends true | false,
  ShouldTodo extends true | false = false,
  CanOverride extends true | false = false
> = A extends TestCase<infer E, infer C>
  ? GetEffectiveTestCase<
      TestCase<E, C>,
      CanOverride extends true
        ? HasOnly<[TestCase<E, C>]> extends true
          ? false
          : ShouldSkip
        : ShouldSkip,
      ShouldTodo
    >
  : A extends TestSuite<infer C, infer CC>
  ? GetEffectiveTestSuite<
      TestSuite<C, CC>,
      HasOnly<[TestSuite<C, CC>]> extends true ? false : ShouldSkip,
      ShouldTodo,
      CanOverride
    >
  : never

type GetEffectiveTestCase<
  A extends TestCase<any, any>,
  ShouldSkip extends true | false,
  ShouldTodo extends true | false = false
> = UpdateModifier<
  ShouldSkip extends true
    ? TestModifier.Skip
    : ShouldTodo extends true
    ? TestModifier.Todo
    : ModifierOf<A>,
  A
>

type GetEffectiveTestSuite<
  A extends TestSuite<any, any>,
  ShouldSkip extends true | false,
  ShouldTodo extends true | false = false,
  CanOverride extends true | false = false
> = _GetEffectiveTestSuite<
  A,
  CanOverride extends true ? (HasOnly<[A]> extends true ? false : ShouldSkip) : ShouldSkip,
  ShouldSkip extends true ? false : ShouldTodo,
  CanOverride
>

type _GetEffectiveTestSuite<
  A extends TestSuite,
  ShouldSkip extends true | false,
  ShouldTodo extends true | false = false,
  CanOverride extends true | false = false
> = _GetEffectiveTestSuiteChildren<
  UpdateModifier<
    ShouldSkip extends true
      ? TestModifier.Skip
      : ShouldTodo extends true
      ? TestModifier.Todo
      : ModifierOf<A>,
    A
  >,
  ShouldSkip extends true ? true : TestModifier.Skip extends ModifierOf<A> ? true : false,
  ShouldTodo extends true ? true : TestModifier.Todo extends ModifierOf<A> ? true : false,
  CanOverride
>

type _GetEffectiveTestSuiteChildren<
  A extends TestSuite,
  ShouldSkip extends true | false,
  ShouldTodo extends true | false = false,
  CanOverride extends true | false = false
> = {
  readonly type: A['type']
  readonly config: ConfigOf<A>
  readonly tests: GetEffectiveTests<
    A['tests'],
    ShouldSkip,
    ShouldTodo,
    CanOverride extends true
      ? ShouldTodo extends false
        ? ShouldSkip extends false
          ? true
          : false
        : false
      : false
  >
}
