import { Just, Maybe } from '@typed/maybe'
import { Base } from '@typed/new-type'
import {
  Test,
  TestConfig,
  TestModifier,
  TestName,
  UpdateModifier,
  UpdateName,
  UpdateTestConfig,
  UpdateTimeout,
} from '../model'

export function updateName<A extends string, B extends Test>(name: A, test: B): UpdateName<A, B> {
  return updateTestConfig({ name: name as TestName<A> }, test)
}

export function updateTimeout<A extends number, B extends Test>(
  timeout: A,
  test: B,
): UpdateTimeout<A, B> {
  return updateTestConfig({ timeout: Just.of(timeout) }, test)
}

export function updateModifier<A extends TestModifier, B extends Test>(
  modifier: A,
  test: B,
): UpdateModifier<A, B> {
  return updateTestConfig({ modifier }, test)
}

export function updateTestConfig<A extends Partial<TestConfig>, B extends Test>(
  updatedConfig: A,
  test: B,
): UpdateTestConfig<B, Base<A['name']>, GetKeyValueOr<A, 'timeout'>, GetKeyValueOr<A, 'modifier'>> {
  return {
    ...test,
    config: {
      ...test.config,
      ...updatedConfig,
    },
  } as any
}

type GetKeyValueOr<
  A extends Partial<TestConfig>,
  K extends keyof TestConfig,
  Fallback = never
> = Exclude<A[K] extends Maybe<infer R> ? R : A[K] extends number ? A[K] : Fallback, unknown>
